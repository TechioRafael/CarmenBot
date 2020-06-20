const Discord = require("discord.js");
module.exports = {
	name: 'd',
    description: 'Rola um dado que gera um número aleatório com base ',
    usage: '!d <lados (valor padrão 6)>',
    only_dev: false,
    tag: 'utilidade',
	execute(message, args) {
        const embed = new Discord.MessageEmbed()
        .setColor('#FFA500')
        .setFooter("Carmenbot - Rafael Techio")
        
        var lados;
        if (!args.length || isNaN(parseInt(args[0]))) {
            lados = 20;
        }else{
            lados = parseInt(args[0]);
        }
		
		embed.setTitle(`D ${lados}!`)
		.addField(`Seu número é:`,` ${Math.round(Math.random() * lados) + 1}!`);
        message.channel.send(embed);
	},
}