#!/usr/bin/env node

`use strict` ;

const colors = require ( `colors` ) ;

const IndexAPI = require ( `./../libraries/IndexAPI` ) ;

const KeyManager = require ( `./../libraries/KeyManager` ) ;

const index =
{
	async prices ( com )
	{
		try
		{
			const keymanager = new KeyManager () ;
			const key = keymanager . show () ;
			const indexapi = new IndexAPI ( key ) ;
			const index = await indexapi . prices ( com . coin , com . curr ) ;
			console . log ( index ) ;
			return ( index ) ;
		}
		catch ( err )
		{
			console . error ( err . message . red ) ;
			return ;
		}
	}
} ;

module . exports = index ;
