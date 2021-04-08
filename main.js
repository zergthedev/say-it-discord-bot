const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '.';
const { Permissions } = require('discord.js');

client.once('ready', () =>{
	console.log('Bot is alive!');
});

client.on('message', message =>{
	if(!message.content.startsWith(prefix) || message.author.bot) return;
	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();
	
	// say
	if(command === 'say'){
		const sayChannel = message.mentions.channels.first();
		const sayDescription = args.slice(1).join(' ')
		//
		const embed = new Discord.MessageEmbed()
		//
		.setDescription(sayDescription)
		.setColor('#00BE84')
		sayChannel.send(embed)
	} else if(command === 'help'){
		//
		const embed = new Discord.MessageEmbed()
		//
		.setTitle('Help')
		.addField('.say', 'Say something, usage: ***.say #channel <message>***.')
		.addField('.help', 'Help command, shows this.')
		.addField('.invite', 'Invite the bot!')
		.setColor('#00BE84')
		message.channel.send(embed)
	} else if(command === 'invite'){
		//
		const embed = new Discord.MessageEmbed()
		//
		.setTitle('Invite')
		.addField('Invite me with', 'https://discord.com/oauth2/authorize?client_id=828965745471127562&scope=bot&permissions=8')
		.setColor('#00BE84')
		message.channel.send(embed)
	}
});

client.login(process.env.token);