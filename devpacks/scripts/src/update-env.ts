import { Command } from 'commander'
import fs from 'fs/promises'
import path from 'path'
import { globSync, type GlobOptionsWithFileTypesFalse } from 'glob'

function findAllProjectPackageJsonFiles(baseDir: string): string[] {
  const pattern: string = path.join(baseDir, '**', 'package.json')
  const ignore = '**/node_modules/**'

  const options: GlobOptionsWithFileTypesFalse = {
    nodir: true,
    ignore
  }

  const packageJsonFiles: string[] = globSync(pattern, options)

  return packageJsonFiles
}

async function findLatestPackageVersion(packageName: string): Promise<string> {
  const response = await fetch(
    `https://registry.npmjs.org/${packageName}/latest`
  )
  const data = (await response.json()) as { version: string }
  return data.version
}

async function findLatestNodeLTSVersion(): Promise<string> {
  const response = await fetch('https://nodejs.org/dist/index.json')
  const data = (await response.json()) as {
    version: string
    lts: string | false
  }[]
  const ltsVersion = data.find((v) => v.lts)?.version
  if (ltsVersion === undefined) {
    throw new Error('Could not find latest LTS version')
  }
  // Remove the 'v' prefix
  return ltsVersion.slice(1)
}

async function updatePackageJson(
  packageJsonFile: string,
  nodeVersion: string,
  pnpmVersion: string
): Promise<void> {
  const packageFile: string = await fs.readFile(packageJsonFile, 'utf-8')
  const packageJson: unknown = JSON.parse(packageFile)

  if (typeof packageJson !== 'object' || packageJson === null) {
    throw new Error('Invalid package.json')
  }

  const updatedPackageJSON = {
    ...packageJson,
    engines: {
      node: nodeVersion,
      pnpm: pnpmVersion
    },
    engineStrict: true,
    packageManager: `pnpm@${pnpmVersion}`
  }

  await fs.writeFile(
    packageJsonFile,
    JSON.stringify(updatedPackageJSON, null, 2)
  )
}

async function main(baseDir: string): Promise<void> {
  console.log(`Updating environment in ${baseDir}`)

  const packageJsonFiles = findAllProjectPackageJsonFiles(baseDir)

  const latestPnpmVersion = await findLatestPackageVersion('pnpm')
  const latestNxVersion = await findLatestPackageVersion('nx')
  const latestNodeVersion = await findLatestNodeLTSVersion()

  // update package.json files
  for (const file of packageJsonFiles) {
    await updatePackageJson(file, latestNodeVersion, latestPnpmVersion)
  }

  // update devcontainer.json
  const devcontainerJsonFilePath = path.join(
    baseDir,
    '.devcontainer',
    'devcontainer.json'
  )
  const devcontainerJsonFile: string = await fs.readFile(
    devcontainerJsonFilePath,
    'utf-8'
  )
  const devcontainerJson: unknown = JSON.parse(devcontainerJsonFile)

  if (typeof devcontainerJson !== 'object' || devcontainerJson === null) {
    throw new Error('Invalid devcontainer.json')
  }

  const updatedDevcontainerJson = {
    ...devcontainerJson,
    features: {
      'ghcr.io/devcontainers/features/node': {
        version: latestNodeVersion
      },
      'ghcr.io/devcontainers-contrib/features/pnpm': {
        version: latestPnpmVersion
      },
      'ghcr.io/balazs23/devcontainers-features/nx': {
        version: latestNxVersion
      }
    }
  }
  await fs.writeFile(
    devcontainerJsonFilePath,
    JSON.stringify(updatedDevcontainerJson, null, 2)
  )

  // update .nvmrc
  const nvmrcFile = path.join(baseDir, '.nvmrc')
  await fs.writeFile(nvmrcFile, latestNodeVersion)

  console.log(
    `Environment updated to Node.js ${latestNodeVersion}, pnpm ${latestPnpmVersion}, and Nx ${latestNxVersion}`
  )
}

export const updateEnvCommand = new Command()
  .name('update-env')
  .description(
    'update node, pnpm, and nx versions in all package.json files, .nvmrc and devcontainer.json'
  )
  .argument('<string>', 'path to root directory of the project')
  .action(async (dir) => {
    if (typeof dir !== 'string') {
      throw new Error('Invalid argument')
    }
    const baseDir = path.resolve(dir)
    await main(baseDir)
  })
