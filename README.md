# Monorepo Template

## Installation
```bash
pnpm i
```

## organization-scripts
Run below scripts to rum automation scripts
```sh
organization-scripts
```

To add a dependency to all packages in your workspace using **pnpm**, you can use the following command:

```bash
pnpm -r <package-name>
```
> [!TIP]
> Replace `<package-name>` with the name of the package you want to add. This command will install the specified package in all packages within your workspace that have it listed as a dependency.

If you want to specify whether the package should be a regular dependency, a dev dependency, or an optional dependency, you can use the appropriate flags:

- To install as a regular dependency:
  ```bash
  pnpm -r <package-name>
  ```

- To install as a dev dependency:
  ```bash
  pnpm -r <package-name> -D
  ```

- To install as an optional dependency:
  ```bash
  pnpm -r <package-name> -O
  ```

Remember that this command operates within the context of your workspace, so it will affect all packages that share dependencies. Happy coding! 🚀

## Commitlint

Commitlint is a tool to help enforce a consistent commit style. This helps with versioning, generating changelogs, and navigating the commit history. Here are some common types of commits:

- `build`: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
- `chore`: Regular code maintenance tasks.
- `ci`: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
- `docs`: Documentation only changes.
- `feat`: A new feature.
- `fix`: A bug fix.
- `perf`: A code change that improves performance.
- `refactor`: A code change that neither fixes a bug nor adds a feature.
- `revert`: Reverts a previous commit.
- `style`: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc).
- `test`: Adding missing tests or correcting existing tests.

For more information, refer to the following resources:

- [Commitlint GitHub](https://github.com/conventional-changelog/commitlint)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [Semantic Versioning Specification](https://semver.org/)