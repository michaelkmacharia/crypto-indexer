#!/usr/bin/env node

`use strict` ;

const colors = require ( `colors` ) ;

const inquirer = require ( `inquirer` ) ;

const KeyManager = require ( `./../libraries/KeyManager` ) ;

const validator = require ( `./../utilities/validator` ) ;

const key =
{
	remove ()
	{
		try
		{
			const keymanager = new KeyManager () ;
			const key = keymanager . remove () ;
			console . log ( `Your current API key has been removed.` . brightGreen ) ;
			return ;
		}
		catch ( err )
		{
			console . error ( err . message . brightRed ) ;
			return ;
		}
	} ,

	async set ()
	{
		const keymanager = new KeyManager () ;
		const input = await inquirer . prompt ( [
			{
				type : `input` ,
				name : `key` ,
				message : `\nEnter your current or new API key:\nNOTE: You can get free keys at https://www.nomics.com/.\n\n` . brightBlue ,
				validate : validator
			}
		] ) ;
		const key = keymanager . set ( input . key ) ;
		if ( key )
		{
			console . log ( `\nYour API key has been set.` . brightGreen ) ;
		}
	} ,

	show ()
	{
		try
		{
			const keymanager = new KeyManager () ;
			const key = keymanager . show () ;
			console . log ( `Your current API key is:\nNOTE: Showing your key is inadvisable in a production environment.\n\n` . brightBlue , key . brightGreen , `\n` ) ;
			return ( key ) ;
		}
		catch ( err )
		{
			console . error ( err . message . brightRed ) ;
			return ;
		}
	}
} ;

module . exports = key ;
