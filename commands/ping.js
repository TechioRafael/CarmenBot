module.exports = {
	name: 'ping',
	description: 'Te falo como está a velocidade da nossa conversa! (incompleto)',
	execute(message, args) {
		message.channel.send('Pong.');
	},
};