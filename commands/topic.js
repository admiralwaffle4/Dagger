module.exports = {
	name: 'topic',
	description: 'Generates a random discussion topic.',
	execute(message, args) {
    function numberGen(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
		var numberGen = Math.floor(Math.random() * (21 - 1 + 1)) + 1;
		if (numberGen == 1) {
			message.channel.send('Where did you go on your last vacation?')
		} else if (numberGen == 2) {
			message.channel.send('Do you have any tattoos? If so, what?')
		} else if (numberGen == 3) {
			message.channel.send('Describe yourself in 3 words or less.')
		} else if (numberGen == 4) {
			message.channel.send('What did you want to be when you were younger?')
		} else if (numberGen == 5) {
			message.channel.send('Do you have any siblings?')
		} else if (numberGen == 6) {
			message.channel.send('What are your hobbies?')
		} else if (numberGen == 7) {
			message.channel.send('Do you text or call more?')
		} else if (numberGen == 8) {
			message.channel.send('What are some things you have gotten in trouble for?')
		} else if (numberGen == 9) {
			message.channel.send('What did you want to be when you were younger?')
		} else if (numberGen == 10) {
			message.channel.send('What is your favorite song?')
		} else if (numberGen == 11) {
			message.channel.send('What are some of your favorite foods?')
		} else if (numberGen == 12) {
			message.channel.send('Would you go to a big party or have a quiet night at home?')
		} else if (numberGen == 13) {
			message.channel.send('What is one of your major goals?')
		} else if (numberGen == 14) {
			message.channel.send('If you won $1,000,000, what would you do with it?')
		} else if (numberGen == 15) {
			message.channel.send('When did you meet your best friend?')
		} else if (numberGen == 16) {
			message.channel.send('What is your biggest success in life?')
		} else if (numberGen == 17) {
			message.channel.send('Donut or Doughnut?')
		} else if (numberGen == 18) {
			message.channel.send('What is your most prized possession?')
		} else if (numberGen == 19) {
			message.channel.send('If you were the leader of your country, what are some things you would do?')
		} else if (numberGen == 20) {
			message.channel.send('What are some popular things that annoy you?')
		}

	},
};
