#!/usr/bin/env -S node --loader ts-node/esm --no-warnings=ExperimentalWarning

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

function findAllProjectPackageJsonFiles(baseDir: string): string[] {
  const pattern = path.join(baseDir, '**', 'package.json')
  const ignore = '**/node_modules/**';
  
  const packageJsonFiles = glob.sync(pattern, {
    nodir: true,
    ignore,
  });

  return packageJsonFiles;
}

async function findLatestPackageVersion(packageName: string): Promise<string> {
  const response = await fetch(`https://registry.npmjs.org/${packageName}/latest`);
  const data = await response.json() as { version: string };
  return data.version;
}

async function findLatestNodeLTSVersion(): Promise<string> {
  const response = await fetch('https://nodejs.org/dist/index.json');
  const data = await response.json() as { version: string, lts: string | false }[];
  const ltsVersion = data.find(v => v.lts)?.version;
  if (!ltsVersion) {
    throw new Error('Could not find latest LTS version');
  }
  // Remove the 'v' prefix
  return ltsVersion.slice(1);
}

async function updatePackageJson(packageJsonFile: string, nodeVersion: string, pnpmVersion: string) {
  const packageJson = JSON.parse(fs.readFileSync(packageJsonFile, 'utf-8'));
  if (!packageJson.engines) {
    packageJson.engines = {};
  }
  packageJson.engines['node'] = nodeVersion;
  packageJson.engines['pnpm'] = pnpmVersion;
  packageJson["engineStrict"] = true;
  packageJson["packageManager"] = `pnpm@${pnpmVersion}`;

  fs.writeFileSync(packageJsonFile, JSON.stringify(packageJson, null, 2));
}

async function main() {
  const baseDir = path.resolve(__dirname, '../');
  const packageJsonFiles = findAllProjectPackageJsonFiles(baseDir);

  const latestPnpmVersion = await findLatestPackageVersion('pnpm');
  const latestNxVersion = await findLatestPackageVersion('nx');
  const latestNodeVersion = await findLatestNodeLTSVersion();

  // update package.json files
  packageJsonFiles
    .forEach(async file => await updatePackageJson(file, latestNodeVersion, latestPnpmVersion));

  // update devcontainer.json
  const devcontainerJsonFile = path.join(baseDir, '.devcontainer', 'devcontainer.json');
  const devcontainerJson = JSON.parse(fs.readFileSync(devcontainerJsonFile, 'utf-8'));
  devcontainerJson['features']['ghcr.io/devcontainers/features/node']['version'] = latestNodeVersion;
  devcontainerJson['features']['ghcr.io/devcontainers-contrib/features/pnpm']['version'] = latestPnpmVersion;
  devcontainerJson['features']['ghcr.io/balazs23/devcontainers-features/nx']['version'] = latestNxVersion;
  fs.writeFileSync(devcontainerJsonFile, JSON.stringify(devcontainerJson, null, 2));

  // update .nvmrc
  const nvmrcFile = path.join(baseDir, '.nvmrc');
  fs.writeFileSync(nvmrcFile, latestNodeVersion);
}

main()
  .catch(console.error);