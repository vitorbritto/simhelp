# Sim Help

Using your `package.json` manifest to generate a simple help for your applications.

## Install

    npm install simhelp

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
    .options('-b', '--build', 'run your application')
    .detail(aut, lic, repo);


// => console.log('');
// => console.log(' ------------------------------------------------------------------------------');
// => console.log(' Sim Help - v0.1.0');
// => console.log(' Generate a simple help based on your package.json manifest.');
// => console.log(' ------------------------------------------------------------------------------');
// => console.log('');
// => console.log(' Usage: simhelp [options]');
// => console.log('');
// => console.log(' Options:');
// => console.log('     -h, --help      output usage information');
// => console.log('     -v, --version   output the version number');
// => console.log('     -b, --build     run your application');
// => console.log('');
// => console.log('');
// => console.log(' Copyright (c) Vitor Britto);
// => console.log(' Licensed under the MIT license);
// => console.log(' https://github.com/vitorbritto/simhelp);
// => console.log(' ------------------------------------------------------------------------------');
// => console.log('');
```

## License

[MIT License](http://vitorbritto.mit-license.org/) © Vitor Britto
