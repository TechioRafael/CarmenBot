const { prefix } = require('../config.json');
module.exports = {
	name: 'comandos',
	description: 'Faz uma lista de todos os comandos',
	aliases: ['commands'],
	usage: '[nome do comando]',
	cooldown: 5,
	execute(message, args) {
		const data = [];
		const { commands } = message.client;

		if (!args.length) {
			data.push('Aqui vai uma lista com todos os meus comandos:\n');
			data.push(commands.map(command => command.name + "\t-\t" + command.description).join('\n'));
			data.push(`\n\nVocê pode digitar \`${prefix}comandos [nome do comando]\` para pedir informações sobre um comando específico!`);

			return message.channel.send(data, { split: true })
				
		}else{
			const name = args[0].toLowerCase();
			const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

			if (!command) {
				return message.reply('Não consegui entender!');
			}

			data.push(` - Nome: ${command.name}`);

			if (command.aliases) data.push(` - Aliases:  ${command.aliases.join(', ')}`);
			if (command.description) data.push(` - Descrição: ${command.description}`);
			if (command.usage) data.push(` - Uso de argumentos ${prefix}${command.name} ${command.usage}`);

			data.push(` - Cooldown: ${command.cooldown || 3} segundo(s)`);

			message.channel.send(data, { split: true });
		}
	},
};