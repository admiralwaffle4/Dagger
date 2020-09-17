module.exports = {
	name: 'beep',
	description: 'Half of the beep/boop series. Says boop.',
	execute(message, args) {
		message.channel.send('Boop.');
	},
};