const fs = require('fs');
const Discord = require('discord.js');

const discordCommands = new Discord.Collection();

const importCommands = () => {
    try {
        const dir = __dirname + '/../Commands';
        fs.readdirSync(dir).forEach(path => {
            const completePath = `${dir}/${path}`;
        
            const fsStatPath = fs.statSync(completePath);
        
            if(fsStatPath.isDirectory()){
                fs.readdirSync(completePath).forEach((subPath,index) => {
                    const commandFile = require(`${completePath}/${subPath}`);
        
                    discordCommands.set(commandFile.name, commandFile);
                })
            }else if(fsStatPath.isFile()){
                const commandFile = require(completePath);
        
                discordCommands.set(commandFile.name, commandFile);
            }
        });

        return discordCommands;
    } catch (error) {
        console.error(`ERRO ao tentar importar comandos. Erro: `, error);
    }
}

module.exports = importCommands;