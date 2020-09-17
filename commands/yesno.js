module.exports = {
  	name: 'yesno',
  	description: 'Creates a yes/no poll in the channel where the command is made.',
  	async execute(message, args) {
      message.delete();
      const sentMessage = await message.channel.send(`${message.author} asks: ${args.join(' ')}`);
      await sentMessage.react('⬆️');
      await sentMessage.react('⬇️');
  	},
  };
// only thing that comes to mind is your 2nd then() is grabbing the react() and not the send() chain; so sentMessage is actually a reaction object, not a message object
