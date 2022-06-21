#!/usr/bin/env node

`use strict` ;

const commander = require ( `commander` ) ;

const package_json = require ( `./../package.json` ) ;

commander
. version ( package_json . version )
. command ( `index` , `Index cryptocurrency data.` )
. command ( `key` , `Manage your API key.` ) ;

commander . parse ( process . argv ) ;

if ( ! process . argv [ 2 ] )
{
	commander . outputHelp () ;
}
