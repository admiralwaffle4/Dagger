module.exports = {
  	name: 'shutdown',
  	description: 'Turns off the bot!',
    aliases: ['restart'],
  	execute(message, args) {
      if (!message.author.id === '522513851942436867') return;
      message.channel.send('Bot has turned off.')
  		process.exit();
  	},
  };
