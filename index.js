const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');

/*const db = require('./database')
const Ticket = require('./models/Ticket')
const TicketConfig = require('./models/TicketConfig')*/
const client = new Discord.Client({ partials: ['MESSAGE', 'REACTION']});
client.commands = new Discord.Collection();
const warns = require("./warns");
client.once('ready', () => {
	console.log('Ready!');
	client.user.setActivity('for +help!', { type: 'WATCHING' })
  .then(presence => console.log(`Activity set to ${presence.activities[0].name}`))
});

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));


for (const file of commandFiles) {
	const command = require(`./commands/${file}`);

	// set a new item in the Collection
	// with the key as the command name and the value as the exported module
	client.commands.set(command.name, command);
}




// prefix = '-'
client.on('message', async message => {

if (!message.content.startsWith(prefix) || message.author.bot) return;

const args = message.content.slice(prefix.length).split(/ +/);
const commandName = args.shift().toLowerCase();
	const command = client.commands.get(commandName)
		|| client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

	if (!command) return;

    try {
    	command.execute(message, args)
    } catch (error) {
    	console.error(error);
    	message.reply('there was an error trying to execute that command!');
    }

});
client.on('guildMemberRemove', async member => {
	const fetchedLogs = await member.guild.fetchAuditLogs({
		limit: 1,
		type: 'MEMBER_KICK',
	});
	// Since we only have 1 audit log entry in this collection, we can simply grab the first one
	const kickLog = fetchedLogs.entries.first();

	//to test
	if (!kickLog) return console.log(`${member.user.tag} left the guild, most likely of their own will.`);
	const { executor, target } = kickLog;

	//to test if a user was kicked or not, and if so, by who
	if (target.id === member.id) {
		console.log(`${member.user.tag} left the guild; kicked by ${executor.tag}?`);
	} else {
		console.log(`${member.user.tag} left the guild, audit log fetch was inconclusive.`)
	}
});


/*client.on('guildMemberAdd', member =>{

	const welcomeChannel = client.channels.cache.get('713215120305815612');
	welcomeChannel.send(`Welcome to the server, <@${newUser}>.

If you need support for a bot feature, head to <#721474668799852605>. If you came here for updates and leaks for Sword, check out <#721474842255294504> and <#721474868415168563>.

Why am I not Sword? I am Dagger, the beta version of Sword for this server only.`);

})*/
/*client.on('messageReactionAdd', async (reaction, user) => {
	if(reaction.emoji.name === '⭐' && reaction.count >= 3) {
		if(reaction.message.partial) {
			const fetchedMessage = await reaction.message.fetch();
			const starboard = client.channels.cache.get('731300595545407578');
			const messages = await starboard.messages.fetch({ limit: 100 })
			console.log('Fetched messages in starboard channel');
			const existingMessage = messages.find(message => {
				if(message.embeds.length == 1) {
					if(message.embeds[0].footer.text.startsWith(fetchedMessage.id)) {
						console.log('Message star found!');
						return true;
					} return false;
				} return false;
			})
			if (existingMessage) {
				existingMessage.edit(`${reaction.count} ⭐s`)
			} else {
				const embed = new Discord.MessageEmbed()
					.setAuthor(fetchedMessage.author.tag, fetchedMessage.author.displayAvatarURL())
					.setColor('ffac33')
					.setTitle('New starred message!')
					.setDescription(fetchedMessage.content)
					.addField('Jump to message!', fetchedMessage.url)
					.setFooter(fetchedMessage.id + ' - Created at: ' + new Date(fetchedMessage.createdTimestamp));
				if (starboard) {
					starboard.send(embed);
			}
			}
	} else {
		const starboard = client.channels.cache.get('731300595545407578');
		const messages = await starboard.messages.fetch({ limit: 100 })
		console.log('Fetched messages in starboard channel');
		const existingMessage = messages.find(message => {
			if(message.embeds.length == 1) {
				if(message.embeds[0].footer.text.startsWith(reaction.message.id)) {
					console.log('Message star found!');
					return true;
				} return false;
			} return false;
		});
		if (existingMessage) {
			existingMessage.edit(`${reaction.count} ⭐s`)
		} else {
			const embed = new Discord.MessageEmbed()
				.setAuthor(reaction.message.author.tag, reaction.message.author.displayAvatarURL())
				.setColor('ffac33')
				.setTitle('New starred message!')
				.setDescription(reaction.message.content)
				.addField('Jump to message!', fetchedMessage.url)
				.setFooter(fetchedMessage.id + ' - Created at: ' + new Date(reaction.message.createdTimestamp));
			if (starboard) {
				starboard.send(embed);
		}
	}

}
}
});*/

// verify role = 🥉Customer
client.login(token)
