#!/usr/bin/env node

`use strict` ;

const commander = require ( `commander` ) ;

const key = require ( `./../commands/key` ) ;

commander
. command ( `remove` )
. description ( `Remove your current API key.` )
. action ( () =>
		{
			key . remove () ;
			return ;
		}
	) ;

commander
. command ( `set` )
. description ( `Set your API key.\nNOTE: You can get free keys at https://www.nomics.com/.` )
. action ( () =>
		{
			key . set () ;
			return ;
		}
	) ;

commander
. command ( `show` )
. description ( `Show your current API key.\nNOTE: Showing your key is inadvisable in a production environment.` )
. action ( () =>
		{
			key . show () ;
			return ;
		}
	) ;

commander . parse ( process . argv ) ;

if ( ! process . argv [ 2 ] )
{
	commander . outputHelp () ;
}
