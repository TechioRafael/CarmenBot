module.exports = {
	name: 'server',
	description: 'Retorno algumas coisinhas sobre o server',
	execute(message, args) {
		message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
	},
};