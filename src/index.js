// Dependencies
const Discord = require('discord.js');
require('dotenv').config({ path: '../.env' })

const discordClient = new Discord.Client();


discordClient.login(process.env.APP_TOKEN);

