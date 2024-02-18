oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![GitHub license](https://img.shields.io/github/license/oclif/hello-world)](https://github.com/oclif/hello-world/blob/main/LICENSE)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @jhasuraj01/cli-app
$ jhasuraj01-cli-app COMMAND
running command...
$ jhasuraj01-cli-app (--version)
@jhasuraj01/cli-app/0.0.1 linux-x64 node-v20.11.0
$ jhasuraj01-cli-app --help [COMMAND]
USAGE
  $ jhasuraj01-cli-app COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`jhasuraj01-cli-app help [COMMANDS]`](#jhasuraj01-cli-app-help-commands)
* [`jhasuraj01-cli-app plugins`](#jhasuraj01-cli-app-plugins)
* [`jhasuraj01-cli-app plugins:install PLUGIN...`](#jhasuraj01-cli-app-pluginsinstall-plugin)
* [`jhasuraj01-cli-app plugins:inspect PLUGIN...`](#jhasuraj01-cli-app-pluginsinspect-plugin)
* [`jhasuraj01-cli-app plugins:install PLUGIN...`](#jhasuraj01-cli-app-pluginsinstall-plugin-1)
* [`jhasuraj01-cli-app plugins:link PLUGIN`](#jhasuraj01-cli-app-pluginslink-plugin)
* [`jhasuraj01-cli-app plugins:uninstall PLUGIN...`](#jhasuraj01-cli-app-pluginsuninstall-plugin)
* [`jhasuraj01-cli-app plugins reset`](#jhasuraj01-cli-app-plugins-reset)
* [`jhasuraj01-cli-app plugins:uninstall PLUGIN...`](#jhasuraj01-cli-app-pluginsuninstall-plugin-1)
* [`jhasuraj01-cli-app plugins:uninstall PLUGIN...`](#jhasuraj01-cli-app-pluginsuninstall-plugin-2)
* [`jhasuraj01-cli-app plugins update`](#jhasuraj01-cli-app-plugins-update)
* [`jhasuraj01-cli-app random [FILE]`](#jhasuraj01-cli-app-random-file)
* [`jhasuraj01-cli-app speak [MESSAGE]`](#jhasuraj01-cli-app-speak-message)

## `jhasuraj01-cli-app help [COMMANDS]`

Display help for jhasuraj01-cli-app.

```
USAGE
  $ jhasuraj01-cli-app help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for jhasuraj01-cli-app.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.0.12/src/commands/help.ts)_

## `jhasuraj01-cli-app plugins`

List installed plugins.

```
USAGE
  $ jhasuraj01-cli-app plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ jhasuraj01-cli-app plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.2.2/src/commands/plugins/index.ts)_

## `jhasuraj01-cli-app plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ jhasuraj01-cli-app plugins add plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -s, --silent   Silences yarn output.
  -v, --verbose  Show verbose yarn output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ jhasuraj01-cli-app plugins add

EXAMPLES
  $ jhasuraj01-cli-app plugins add myplugin 

  $ jhasuraj01-cli-app plugins add https://github.com/someuser/someplugin

  $ jhasuraj01-cli-app plugins add someuser/someplugin
```

## `jhasuraj01-cli-app plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ jhasuraj01-cli-app plugins inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ jhasuraj01-cli-app plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.2.2/src/commands/plugins/inspect.ts)_

## `jhasuraj01-cli-app plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ jhasuraj01-cli-app plugins install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -s, --silent   Silences yarn output.
  -v, --verbose  Show verbose yarn output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ jhasuraj01-cli-app plugins add

EXAMPLES
  $ jhasuraj01-cli-app plugins install myplugin 

  $ jhasuraj01-cli-app plugins install https://github.com/someuser/someplugin

  $ jhasuraj01-cli-app plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.2.2/src/commands/plugins/install.ts)_

## `jhasuraj01-cli-app plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ jhasuraj01-cli-app plugins link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help          Show CLI help.
  -v, --verbose
      --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ jhasuraj01-cli-app plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.2.2/src/commands/plugins/link.ts)_

## `jhasuraj01-cli-app plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ jhasuraj01-cli-app plugins remove plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ jhasuraj01-cli-app plugins unlink
  $ jhasuraj01-cli-app plugins remove

EXAMPLES
  $ jhasuraj01-cli-app plugins remove myplugin
```

## `jhasuraj01-cli-app plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ jhasuraj01-cli-app plugins reset [--hard] [--reinstall]

FLAGS
  --hard       Delete node_modules and package manager related files in addition to uninstalling plugins.
  --reinstall  Reinstall all plugins after uninstalling.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.2.2/src/commands/plugins/reset.ts)_

## `jhasuraj01-cli-app plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ jhasuraj01-cli-app plugins uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ jhasuraj01-cli-app plugins unlink
  $ jhasuraj01-cli-app plugins remove

EXAMPLES
  $ jhasuraj01-cli-app plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.2.2/src/commands/plugins/uninstall.ts)_

## `jhasuraj01-cli-app plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ jhasuraj01-cli-app plugins unlink plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ jhasuraj01-cli-app plugins unlink
  $ jhasuraj01-cli-app plugins remove

EXAMPLES
  $ jhasuraj01-cli-app plugins unlink myplugin
```

## `jhasuraj01-cli-app plugins update`

Update installed plugins.

```
USAGE
  $ jhasuraj01-cli-app plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.2.2/src/commands/plugins/update.ts)_

## `jhasuraj01-cli-app random [FILE]`

describe the command here

```
USAGE
  $ jhasuraj01-cli-app random [FILE] [-n <value>] [-f]

ARGUMENTS
  FILE  file to read

FLAGS
  -f, --force
  -n, --name=<value>  name to print

DESCRIPTION
  describe the command here

EXAMPLES
  $ jhasuraj01-cli-app random
```

## `jhasuraj01-cli-app speak [MESSAGE]`

Speak Message

```
USAGE
  $ jhasuraj01-cli-app speak [MESSAGE] -s <value>

ARGUMENTS
  MESSAGE  The message

FLAGS
  -s, --speaker=<value>  (required) Speaker

DESCRIPTION
  Speak Message
```
<!-- commandsstop -->
