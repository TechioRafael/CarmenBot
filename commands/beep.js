module.exports = {
	name: 'beep',
	description: '?',
	only_dev: true,
	tag: 'utilidade',
	execute(message, args) {
		message.channel.send('Boop!');
	},
}