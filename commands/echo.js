// receivedMessage.channel.send(receivedMessage.content.replace('-echo', ''));

//  const args = message.content.slice(prefix.length).split(/ +/);
/*if (!args.length) {
    return message.channel.send(`You didn't provide anything to echo, ${message.author}!`);
}
message.channel.send(`${args}`);*/
module.exports = {
  name: 'echo',
  description: 'Echoes what you say!',
  aliases: ['say'],
  execute(message, args) {
    message.delete();
    console.log(message.author.username + ' echoed: ' + args.join(' '));
    message.channel.send(args.join(' '));
  },
};
