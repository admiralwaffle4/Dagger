const Discord = require('discord.js');
const ms = require('ms');
module.exports = {
	name: 'mute',
	description: 'Mutes a member.',
	async execute(message, args) {
		if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('You do not have permission to use this command.');

		var user = message.mentions.users.first();
		if(!user) return message.reply('You need to mention someone to mute.');

		var member;
		try {
			member = await message.guild.members.fetch(user);
		} catch(err) {
			member = null;
		}
		if (!member) return message.reply('That user is not in this server')
		if(member.hasPermission('MANAGE_MESSAGES')) return message.reply('You can\'t mute a moderator!')

		var reason = args.splice(2).join(' ');
		if(!reason) return message.reply('A reason is required.')

		if (message.guild.id === '721448802531278929') {
			var logChannel = message.guild.channels.cache.get('726617842706808942');
		}

		var rawTime = args[1];
		var time = ms(rawTime);
		if(!time) return message.reply('A mute duration is required.')

		if (logChannel) {
		const loggedWarnMessage = new Discord.MessageEmbed()
			.setTitle('User muted:')
			.addField('User:', user, true)
			.addField('Moderator:', `<@${message.author.id}>`, true)
			.addField('Reason:', reason)
			.addField('Duration:', rawTime)
		logChannel.send(loggedWarnMessage);
	}
		user.send(`You were muted in ${message.guild.name} for the duration of ${rawTime} by ${message.author.username}.`);
		message.channel.send(`${user} has been muted for ${rawTime}!`);

		var muteRole;
		if (message.guild.id === '721448802531278929') {
			role = message.guild.roles.cache.get('727352270177435659');
		}
		member.roles.add(role);

		setTimeout(async() => {
			member.roles.remove(role);
		}, time);

		//727352270177435659

	},
};
