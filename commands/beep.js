module.exports = {
	name: 'beep',
	description: '?',
	execute(message, args) {
		message.channel.send('Boop!');
	},
}