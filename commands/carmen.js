const Discord = require("discord.js");
module.exports = {
	name: 'carmen',
    description: 'Retorna um quadrinho bonitinho com informações sobre mim',
    only_dev: false,
    tag: 'mensagem',
	execute(message, args) {
        const embed = new Discord.MessageEmbed()
        .setColor('#FFA500')
        .setTitle('CarmenBot')
        .setAuthor('Rafael Techio', '', 'https://twitter.com/TechioT_')
        .setDescription('Olá! Meu nome é Carmen e estou aqui para ajuda-los em suas tarefas diárias. Em breve, novidades virão para cada vez mais podermos interagir juntos, INFEERNO')
        .setThumbnail('https://cdn.discordapp.com/avatars/704713721133400094/10ed29f681db4c97de51d7c39287a56b.png')
        .addFields(
            { name: '\u200B', value: '\u200B' },
            { name: '!comandos', value: 'Desta forma consigo te enviar uma lista com todos os comandos disponíveis', inline: true },
            { name: '!carmen', value: 'Caso você queria ver esta linda mensagem novamente', inline: true },
        )
        .setTimestamp()
        .setFooter('Rafael Techio', 'https://twitter.com/TechioT_');    
        message.channel.send(embed);
	},
}