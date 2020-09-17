const Discord = require('discord.js');
const warns = require("c:/users/admir/documents/sword/warns");
const fs = require("fs");

module.exports = {
	name: 'warn',
	description: 'Warns a member.',
	async execute(message, args) {
		if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('You do not have permission to use this command.');

		var user = message.mentions.users.first();
		if(!user) return message.reply('You need to mention someone to warn.');

		var member;

		try {
			member = await message.guild.members.fetch(user);
		} catch(err) {
			member = null;
		}
		if (!member) return message.reply('That user is not in this server')

		var reason = args.splice(1).join(' ');
		if(!reason) return message.reply('A reason is required.')

		if (message.guild.id === '721448802531278929') {
			var logChannel = message.guild.channels.cache.get('726617842706808942');
		}
		if (logChannel) {
		const loggedWarnMessage = new Discord.MessageEmbed()
			.setTitle('User warned:')
			.addField('User:', user, true)
			.addField('Moderator:', `<@${message.author.id}>`, true)
			.addField('Reason:', reason)
		logChannel.send(loggedWarnMessage);
		}
		user.send(`You were warned in ${message.guild.name} for ${reason} by ${message.author.username}.`);
		message.channel.send(`${user} has been warned!`);
		let loggedWarn = {
    	'Person Warned': user.username,
    	Moderator: message.author.name,
    	Reason: reason
		};
		warns.push(loggedWarn);
		fs.writeFile("warns.json", JSON.stringify(warns), err => {

    // Checking for errors
    	if (err) throw err;

    	console.log("Done writing"); // Success
		});
	},
};
