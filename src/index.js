// Dependencies
const fs = require('fs');
const Discord = require('discord.js');
require('dotenv').config({ path: '.env' })

const BotError = require('./Errors/BotError');


const discordClient = new Discord.Client();

discordClient.on('message', async (message) => {
    try {
        
    } catch (error) {
        if(error instanceof BotError){
            message.channel.send(error.message)
        }
    }
})

discordClient.login(process.env.APP_TOKEN);

