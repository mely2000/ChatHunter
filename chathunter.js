const tmi = require('tmi.js');

const client = new tmi.Client(
    {
	channels: [ 'xQcOW' ]
});

client.connect();

client.on('message', (channel, tags, message, self) => 
{
    if(tags['display-name'] == 'tazr_ow')
    {
        console.log(tags['display-name'] +': '+ message);
    }
	
});