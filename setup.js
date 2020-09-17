module.exports = {
	name: 'setup',
	description: 'Sets up the ticket system.',
	execute(message, args) {
		if (message.guild.id === '714298240593297458') {
			if (message.author.permissions.has('ADMINISTRATOR')) {
				try {
					const filter = (m) => m.author.id === message.author.id;
					message.channel.send('Enter the message id for the ticket creation.');
					const msgId = (await message.channel.awaitMessages(filter, { max: 1 })).first().content;
					const fetchMsg = message.channel.messages.fetch(content);
					message.channel.send('Enter the category id for the ticket creation.');
					const categoryId = (await message.channel.awaitMessages(filter, { max: 1 })).first().content;
					const categoryChannel = client.channels.cache.get(categoryId);
					message.channel.send('Enter the role id(s) for the ticket creation.');
					const roles = (await message.channel.awaitMessages(filter, { max: 1 })).first().content.split(/,\s*/);
					if (fetchMsg && categoryChannel) {
						for (const roleId of roles) {
							if (!message.guild.roles.cache.get(roleId)) throw new Error('Role does not exist');
						}
					}
				} catch (err) {

				}
			}
		}
	},
};
