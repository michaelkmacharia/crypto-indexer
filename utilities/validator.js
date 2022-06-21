#!/usr/bin/env node

`use strict` ;

const validator = input => ( input === `` ? `This value is required.` : true ) ;

module . exports = validator ;
