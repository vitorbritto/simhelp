# Sim Help [![NPM version](https://badge.fury.io/js/simhelp.svg)](http://badge.fury.io/js/simhelp) [![GitHub version](https://badge.fury.io/gh/vitorbritto%2Fsimhelp.svg)](http://badge.fury.io/gh/vitorbritto%2Fsimhelp)

With **SimHelp** you can render a simple help instruction based on your `package.json` manifest.

## Install

```bash
$ npm install simhelp
```

## Usage

```javascript
// Init Config
var help = require('simhelp'),
    pkg  = require('./package');

// Program Information
var pnm   = pkg.name,               // => Sim Help
    ver   = pkg.version,            // => 0.1.4
    desc  = pkg.description,        // => Generate a simple help based on your package.json manifest.
    aut   = pkg.author.name,        // => Vitor Britto
    lic   = pkg.license,            // => MIT
    cmd   = '<foo> <bar>';          // => <foo> <bar>

// Show Help
help
    .main(pnm, ver, desc, cmd)
    .head('Options:')
    .option('h', 'help', 'output help message')
    .option('v', 'version', 'output the version number')
    .head('Commands:')
    .command('foo', 'this is the first command')
    .command('bar', 'this is the second command')
    .details(aut, lic);
```

**RETURN**

```
-----------------------------------------------------------------
Sim Help - v0.1.0
Renders a simple help based on your package.json manifest.
-----------------------------------------------------------------

Usage: simhelp <foo> <bar> [options]

Options:
    -h, --help      output usage information
    -v, --version   output the version number

Commands:
    foo             this is the first command
    bar             this is the second command

Copyright (c) Vitor Britto
Licensed under the MIT license
-----------------------------------------------------------------
```

## License

[MIT License](http://vitorbritto.mit-license.org/) © Vitor Britto
