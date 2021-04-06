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
	
	// pomoc
	if(command === 'say'){
		const embed = new Discord.MessageEmbed()
		const title = args.slice(1).join(' ')
		const desc = args.slice(2).join(' ')
		.setTitle(title)
		.setDescription(desc)
		.setColor('#00BE84')
		message.channel.send(embed)
	} 
});

client.login(process.env.token);