module.exports = {
	name: 'invite',
	description: 'Sends a link to invite Dagger to your server!',
	execute(message, args) {
		message.channel.send('Invite Dagger to your server! https://discord.com/api/oauth2/authorize?client_id=725724715473174600&permissions=8&scope=bot');
	},
};
