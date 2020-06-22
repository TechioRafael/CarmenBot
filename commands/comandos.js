const { prefix } = require('../config.json');
const Discord = require("discord.js");
module.exports = {
	name: 'comandos',
	description: 'Faz uma lista de todos os comandos',
	aliases: ['commands'],
	usage: '[nome do comando]',
	only_dev: false,
	execute(message, args) {
		const data = [];
		const { commands } = message.client;

		const embed = new Discord.MessageEmbed().setColor('#FFA500').setFooter("Carmenbot - Rafael Techio");
		if (!args.length) {
			embed.setTitle('Comandos')
			.setDescription('Aqui vai uma lista com todos os meus comandos:');
			commands.map(command => {
				if(!command.only_dev)embed.addField( command.name, command.description);
			});
			embed.addField(`Quer saber sobre um comando específico?`, `Você pode digitar \`${prefix}comandos [nome do comando]\` para pedir informações sobre um comando específico!`);

			return message.channel.send(embed)
				
		}else{
			const name = args[0].toLowerCase();
			const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

			if (!command) {
				return message.reply('Não consegui entender!');
			}

			embed.setTitle(`${command.name}`);

			if (command.aliases) embed.addField(`Aliases:`,`${command.aliases.join(', ')}`);
			if (command.description) embed.addField(`Descrição: `,`${command.description}`);
			if (command.usage) embed.addField(`Uso de argumentos`,`${prefix}${command.name} ${command.usage}`);

			embed.addField(`Cooldown (s):`,`${command.cooldown || 3}`);

			message.channel.send(embed);
		}
	},
};
