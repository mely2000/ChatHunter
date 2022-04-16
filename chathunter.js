const Discord = require('discord.js');
const tmi = require('tmi.js');

const Dclient = new Discord.Client;
Dclient.login('ODU0Nzc4ODAyMTM4NjQ0NDkw.YMo4yw.9n3bCzyLSkNM_sQb3cmrPhQ0GR0');



const Tclient = new tmi.Client({
    connection: 
    {
      reconnect: true
    },
    channels: 
    [
      'xQcOW'
    ]
  });
  Tclient.connect();


Dclient.on('ready', () => 
{
    console.log(`Logged in as ${Dclient.user.tag}!`);
});

Tclient.on('message', (channel, tags, message, self) => 
{
    if(tags['display-name'] == '')
    {
        console.log(tags['display-name'] +': '+ message);
        Dclient.channels.cache.get("855050655815172116").send(tags['display-name']+ ': '+message);
    }
	
});


