module.exports = {
	name: 'invite',
	description: 'Sends a link to invite Sword to your server!',
	execute(message, args) {
		message.channel.send('Invite Sword to your server! https://discord.com/api/oauth2/authorize?client_id=712832100385947719&permissions=8&scope=bot');
	},
};
