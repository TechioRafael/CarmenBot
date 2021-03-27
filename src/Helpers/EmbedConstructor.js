const Discord = require('discord.js');
const embedConstructor = {};

embedConstructor.getEmbedTemplate = () => {
    try {
        const embed = new Discord.MessageEmbed();

        embed.setAuthor("CarmenBot");
        embed.setColor("#FFA500");
        embed.setFooter("CarmenBot");

        return embed;
    } catch (error) {
        console.error(`ERROR trying to get an embed template`, error);
    }
}


module.exports = embedConstructor;