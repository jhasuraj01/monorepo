# Monorepo Template

## Installation
```bash
pnpm i
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
