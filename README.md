# Sim Help

Using your `package.json` manifest to generate a simple help for your applications. [![NPM version](https://badge.fury.io/js/simhelp.svg)](http://badge.fury.io/js/simhelp) [![GitHub version](https://badge.fury.io/gh/vitorbritto%2Fsimhelp.svg)](http://badge.fury.io/gh/vitorbritto%2Fsimhelp)

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
var pnm   = pkg.name,        // => Sim Help
    ver   = pkg.version,     // => 0.1.0
    desc  = pkg.description, // => Generate a simple help based on your package.json manifest.
    aut   = pkg.author.name, // => Vitor Britto
    lic   = pkg.license,     // => MIT
    repo  = pkg.repo;        // => https://github.com/vitorbritto/simhelp

// Show Help
help
    .main(pnm, ver, desc)
    .option('h', 'help', 'output help message')
    .option('v', 'version', 'output app version')
    .option('b', 'build', 'run your application')
    .details(aut, lic, repo);
```

**RETURN**

```
-----------------------------------------------------------------
Sim Help - v0.1.0
Generate a simple help based on your package.json manifest.
-----------------------------------------------------------------

Usage: simhelp [options]

Options:
    -h, --help      output usage information
    -v, --version   output the version number
    -b, --build     run your application


Copyright (c) Vitor Britto
Licensed under the MIT license
https://github.com/vitorbritto/simhelp
-----------------------------------------------------------------
```

## License

[MIT License](http://vitorbritto.mit-license.org/) © Vitor Britto
