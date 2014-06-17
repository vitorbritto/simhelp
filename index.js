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

    this.main = function(pkgname, pkgversion, pkgdesc, cmds) {
        console.log('');
        console.log(' ------------------------------------------------------------------------------');
        console.log(' %s - %s', pkgname.toUpperCase(), pkgversion);
        console.log(' %s', pkgdesc);
        console.log(' ------------------------------------------------------------------------------');
        console.log('');
        console.log(' Usage: %s %s [options]', pkgname, cmds);
        console.log('');
        return _this;
    };

    this.head = function(type) {
        console.log('');
        console.log(' ' + type);
        return _this;
    };

    this.command = function(cmd, desc) {
        console.log( '\t\t%s\t%s', cmd, desc);
        return _this;
    };

    this.option = function(alias, flag, desc) {
        console.log( '\t\t-%s, --%s\t%s', alias, flag, desc);
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

module.exports = exports = new Help();
