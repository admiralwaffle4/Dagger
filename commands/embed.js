//New Command Template:

const Discord = require('discord.js');

module.exports = {
	name: 'embed',
	description: 'Echoes your message as an embed! If you say "author" at the beginning, it will add you as the author.',
	aliases: [],
	usage: [],
	async execute(message, args) {
		message.delete();
		if (args[0] === 'author') {
			const embed1 = new Discord.MessageEmbed()
				.setAuthor(message.author.tag, message.author.displayAvatarURL())
				.setTitle(args.slice(1).join(' '))
				.setColor('5e16eb');
			message.channel.send(embed1);
		} else {
			const embed2 = new Discord.MessageEmbed()
				.setTitle(args.join(' '))
				.setColor('5e16eb');
			message.channel.send(embed2);
		}

	},
};
