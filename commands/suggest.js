
module.exports = {
	name: 'suggest',
	description: 'Suggests something.',
	async execute(message, args) {
		if (message.guild.id = '721448802531278929') { //sword's server
			const channel1 = message.guild.channels.cache.get('721474694288506950');  //finds the channel named suggestions

			const sMessage1 = await channel1.send('Suggestion:\n ' + '```' + args.join(' ') + '```')  //Sends the arguments
			await sMessage1.react('⬆️');
			await sMessage1.react('⬇️');
    } else if (message.guild.id = '722533543296892978') { //creeper's server
				const channel2 = message.guild.channels.cache.get('722824522520199209');  //finds the channel named suggestions

				const sMessage2 = await channel2.send('Suggestion:\n ' + '```' + args.join(' ') + '```')  //Sends the arguments
				await sMessage2.react('⬆️');
				await sMessage2.react('⬇️');
		}
	},
};
/*const channel = msg.guild.channels.find(ch => ch.name === 'suggestions');  //finds the channel named suggestions

channel.send('Suggestion:\n ' + args.join(' '))  //Sends the arguments
}*/
