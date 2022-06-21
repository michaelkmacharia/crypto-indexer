#!/usr/bin/env node

`use strict` ;

const axios = require ( `axios` ) ;

const colors = require ( `colors` ) ;

class IndexAPI
{
	constructor ( key )
	{
		this . key = key ;
		this . url = `https://api.nomics.com/v1/currencies/ticker/` ;
	}

	async prices ( coin , curr )
	{
		try
		{
			const formatter = new Intl . NumberFormat ( `en-US` , { style : `currency` , currency : curr } ) ;
			const response = await axios . get ( `${ this . url }?key=${ this . key }&ids=${ coin }&convert=${ curr }` ) ;
			let output = `` ;
			response . data . forEach ( ( coin ) =>
				{
					output += `Coin: ${ coin . symbol . brightYellow } ( ${ coin . name } ) | Price: ${ formatter . format ( coin . price ) . brightGreen } | Rank: ${ coin . rank . brightCyan }\n` ;
				}
			) ;
			return ( output ) ;
		}
		catch ( err )
		{
			processError ( err ) ;
			return ;
		}
	}
}

function processError ( err )
{
	switch ( ( err . response ) ? ( err . response . status ) : ( '' ) )
	{
		case ( 401 ) :
			throw ( new Error ( `Your current API key is invalid.\nNOTE: You can get free keys at https://www.nomics.com/.` ) ) ;
			break ;
		case ( 404 ) :
			throw ( new Error ( `Our API is currently unresponsive. Try again later.` ) ) ;
			break ;
		default:
			throw ( new Error ( `Something is not functioning as intended.\nNOTE: An internet connection is required for functionality.` ) ) ;
			break ;
	}
	return ;
}

module . exports = IndexAPI ;
