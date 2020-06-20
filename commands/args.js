module.exports = {
	name: 'args',
	description: 'Digo quais são os argumentos que tu me passou',
	usage: '<argumento 1> <argumento 2> ...',
	tag: 'utilidade',
	only_dev: true,
	execute(message, args) {
		if (!args.length) {
			return message.channel.send(`Tu não me passou nenhum argumento, ${message.author}!`);
		} 

		message.channel.send(`Argumentos: ${args}\nNúmero de argumentos: ${args.length}`);
	},
};