module.exports = {
	name: 'recarregar',
	description: 'Recarrega um comando',
	execute(message, args) {
		if (!args.length) return message.channel.send(`Tu não me passou nenhum comando para ser recarregado, ${message.author}!`);
		const commandName = args[0].toLowerCase();
		const command = message.client.commands.get(commandName)
			|| message.client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

		if (!command) return message.channel.send(`Não conheço nenhum comando com esse nome \`${commandName}\`, ${message.author}!`);
		delete require.cache[require.resolve(`./${command.name}.js`)];
		try {
			const newCommand = require(`./${command.name}.js`);
			message.client.commands.set(newCommand.name, newCommand);
		} catch (error) {
			console.log(error);
			message.channel.send(`Acontenceu algum erro enquanto tentava recarregar esse comando: \`${command.name}\`:\n\`${error.message}\``);
		}
		message.channel.send(`Comando\`${command.name}\` foi recarregado!`);
	},
};