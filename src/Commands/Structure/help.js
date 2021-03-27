// const Discord = require('discord.js');
// const discordCommands = require('../../Helpers/ImportCommands')();
const embed = require('../../Helpers/EmbedConstructor');

module.exports = {
    name: 'help',
    description: 'Retorna uma lista de comandos disponíveis',
    execute: (message, args) => {
        // discordCommands.filter(command => !command.administrator & !command.developer).forEach(command => {
        //     embed.addField(command.name, command.description);
        // })

        message.channel.send(embed);
    }
}