module.exports = {
	name: 'beep',
	description: '?',
	only_dev: false,
	execute(message, args) {
		message.channel.send('Boop!');
	},
}