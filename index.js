/*!
 * Copyright 2014, All Rights Reserved.
 *
 * Code licensed under the MIT License:
 * http://vitorbritto.mit-license.org/
 *
 * Author: Vitor Britto <code@vitorbritto.com.br>
 */

'use strict';

var Help = function Help() {

    var _this = this;

    this.main = function(pkgname, pkgversion, pkgdesc) {
        console.log('');
        console.log(' ------------------------------------------------------------------------------');
        console.log(' %s - %s', pkgname.toUpperCase(), pkgversion);
        console.log(' %s', pkgdesc);
        console.log(' ------------------------------------------------------------------------------');
        console.log('');
        console.log(' Usage: %s [options]', pkgname);
        console.log('');
        console.log(' Options:');
        console.log('     -h, --help      output usage information');
        console.log('     -v, --version   output the version number');
        return _this;
    };

    this.option = function(alias, flag, desc) {
        console.log('     -%s, --%s      %s', alias, flag, desc);
        return _this;
    };

    this.details = function(pkgauthor, pkglicense) {
        console.log('');
        console.log(' Copyright (c) %s', pkgauthor);
        console.log(' Licensed under the %s license.\n', pkglicense);
        console.log(' ------------------------------------------------------------------------------');
        console.log('');
        return _this;
    };

};

exports = module.exports = new Help;
exports.Help = Help;
