const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '.';

client.once('ready', () =>{
	console.log('Bot is alive!');
});

client.on('message', message =>{
	if(!message.content.startsWith(prefix) || message.author.bot) return;
	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();
	
	let embed = new Discord.MessageEmbed()
	
	// say
	if(command === 'say'){
		const sayChannel = message.mentions.channels.first();
		const sayDescription = args.slice(1).join(' ')
		.setDescription(sayDescription)
		.setColor('#00BE84')
		sayChannel.send(embedSay)
	}
})

client.login(process.env.token);