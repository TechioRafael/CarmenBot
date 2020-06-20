const Discord = require("discord.js");
module.exports = {
	name: 'server',
	description: 'Retorna algumas coisinhas sobre o server',
	only_dev: false,
	tag: 'server',
	execute(message, args) {
		const embed = new Discord.MessageEmbed()
		.setColor('#FFA500')
		.setFooter("Carmenbot - Rafael Techio")
		.setTitle(`${message.guild.name}`)
		.addField(`Total de membros:`,` ${message.guild.memberCount}`);
		message.channel.send(embed);
	},
};