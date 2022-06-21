#!/usr/bin/env node

`use strict` ;

const commander = require ( `commander` ) ;

const index = require ( `./../commands/index` ) ;

commander
. command ( `prices` )
. description ( `Index relevant cryptocurrency prices.` )
. option ( `--coin <type>` , `Specify relevant coin types (in CSV format).` , `BTC,ETH,USDT` )
. option ( `--curr <currency>` , `Specify relevant currency type.` , `USD` )
. action ( ( com ) =>
		{
			index . prices ( com ) ;
			return ;
		}
	) ;

commander . parse ( process . argv ) ;

if ( ! process . argv [ 2 ] )
{
	commander . outputHelp () ;
}
