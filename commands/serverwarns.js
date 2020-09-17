const Discord = require('discord.js');
const warns = require("c:/users/admir/documents/dagger/warns");

module.exports = {
	name: 'serverwarns',
	description: 'Shows all of the warns on the server.',
	execute(message, args) {
    const embed = new Discord.MessageEmbed()
      .setTitle('Warns on the server:')
      .setDescription(warns)
		message.channel.send(embed);
	},
};
