// Dependencies
const Discord = require('discord.js');
require('dotenv').config({ path: '../.env' })

const discordClient = new Discord.Client();
const discordCommands = require('./Helpers/ImportCommands')();
const embedConstructor = require('./Helpers/EmbedConstructor');

const prefix = process.env.APP_MESSAGE_PREFIX;

discordClient.on('message', async (message) => {
    try {
        if(!message.content.startsWith(prefix) || message.author.bot){return }

        const messageCommand = message.content.slice(prefix.length).split(" ");
        const commandName = messageCommand.shift().toLowerCase();
        const commandArgs = messageCommand;

        if(discordCommands.has(commandName)){
            const command = discordCommands.get(commandName);
            command.execute(message, commandArgs);
        }
    } catch (error) {
        console.error(`ERROR trying to execute a command. Message content: '${message.content}' Error: `, error);
    }
})

discordClient.on('guildMemberAdd', async (guildMember) => {
    try {
        console.log("guildMemberAdd");
        const channel = guildMember.guild.channels.cache.filter(channel => channel.type == 'text').sort((a, b) => a.rawPosition - b.rawPosition).first();

        const embed = embedConstructor.getEmbedTemplate();
        embed.setTitle(`Bem Vindo(a)!`).setDescription(`Bem vindo(a) ao servidor ${guildMember.guild}, ${guildMember.nickname ? guildMember.nickname : guildMember.displayName}!`)

        channel.send(embed);
    } catch (error) {
        console.error(`ERROR trying to execute a action on guilder member add. Error: `, error);
    }
})

discordClient.on('guildMemberRemove', async (guildMember) => {
    try {
        console.log("guildMemberRemove");
        const channel = guildMember.guild.channels.cache.filter(channel => channel.type == 'text').sort((a, b) => a.rawPosition - b.rawPosition).first();

        const embed = embedConstructor.getEmbedTemplate();
        embed.setTitle(`Adeus :(`).setDescription(`${guildMember.nickname ? guildMember.nickname : guildMember.displayName} acabou de sair de ${guildMember.guild} :(`)

        channel.send(embed);
    } catch (error) {
        console.error(`ERROR trying to execute a action on guilder member remove. Error: `, error);
    }
})

try{
    discordClient.login(process.env.APP_TOKEN);
} catch (error) {
    console.error(`ERROR trying to login to Discord API`);
} 

