module.exports = {
	name: 'boop',
	description: 'Other half of the beep/boop series.',
	execute(message, args) {
		message.channel.send('Beep.');
	},
};