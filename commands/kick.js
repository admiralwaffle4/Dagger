const Discord = require('discord.js');
const warns = require("c:/users/admir/documents/dagger/warns");
const fs = require("fs");

module.exports = {
	name: 'kick',
	description: 'Kicks a member.',
	async execute(message, args) {
		if (!message.member.hasPermission('KICK_MEMBERS')) return message.reply('You do not have permission to use this command.');

		var user = message.mentions.users.first();
		if(!user) return message.reply('You need to mention someone to kick.');

		var member;

		try {
			member = await message.guild.members.fetch(user);
		} catch(err) {
			member = null;
		}
		if (!member) return message.reply('That user is not in this server')
		if(member.hasPermission('MANAGE_MESSAGES')) return msg.reply('You cannot ban a moderator!');


		var reason = args.splice(1).join(' ');
		if(!reason) return message.reply('A reason is required.')

		if (message.guild.id === '721448802531278929') {
			var logChannel = message.guild.channels.cache.get('726617842706808942');
		}
		if (logChannel) {
		const loggedWarnMessage = new Discord.MessageEmbed()
			.setTitle('User kicked:')
			.addField('User:', user, true)
			.addField('Moderator:', `<@${message.author.id}>`, true)
			.addField('Reason:', reason)
		logChannel.send(loggedWarnMessage);
	}
		try {
			await user.send(`You were kicked in ${message.guild.name} for ${reason} by ${message.author.username}.`);
		} catch (err) {
			console.warn(err);
		}

		member.kick(reason);

		message.channel.send(`${user} has been kicked!`);

    // Checking for errors

	},
};
