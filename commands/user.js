const Discord = require("discord.js");
module.exports = {
	name: 'user',
    description: 'Retorna algumas informações dos usuários que tu me passar (v. 1.0)',
    usage: '<usuario 1> <usuario 2>',
	execute(message, args) {
        const embed = new Discord.MessageEmbed().setColor('#FFA500').setFooter("Carmenbot - Rafael Techio");
        if (!message.mentions.users.size) {
            embed.setTitle(`${message.author.username}`)
            .addField(`ID:`, `${message.author.id}`)
            .addField(`Avatar:`, `${message.author.displayAvatarURL({ format: "png", dynamic: true })}`)
            return message.channel.send(embed);
        }

        embed.setTitle("Informações:")
        message.mentions.users.map(user => {
            embed.addField(`Nick:`, `${user.username}`)
            .addField(`ID:`, `${user.id}`)
            .addField(`Avatar:`, `${user.displayAvatarURL({ format: "png", dynamic: true })}`)
        });
        message.channel.send(embed);
	},
}
