#!/usr/bin/env node

`use strict` ;

const Configstore = require ( `configstore` ) ;

const package_json = require ( `./../package.json` ) ;

class KeyManager
{
	constructor ()
	{
		this . configstore = new Configstore ( package_json . name , {} ) ;
	}

	remove ()
	{
		const key = this . configstore . get ( `key` ) ;
		if ( ! key )
		{
			throw ( new Error ( `No API key currently set.\nNOTE: You can get free keys at https://www.nomics.com/.` ) ) ;
		}
		this . configstore . delete ( `key` ) ;
		return ;
	}

	set ( key )
	{
		this . configstore . set ( `key` , key ) ;
		return ( key ) ;
	}

	show ()
	{
		const key = this . configstore . get ( `key` ) ;
		if ( ! key )
		{
			throw ( new Error ( `No API key currently set.\nNOTE: You can get free keys at https://www.nomics.com/.` ) ) ;
		}
		return ( key ) ;
	}
}

module . exports = KeyManager ;
