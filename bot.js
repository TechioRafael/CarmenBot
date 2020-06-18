
const fs = require('fs');
//Dependência
const Discord = require("discord.js");
//Cliente
const client = new Discord.Client();
//Requerimento do Token
const { prefix, token } = require('./config.json');


client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

//Adição da biblioteca jimp para edição de imagens (usada na mensagem de boas vindas)
const jimp = require('jimp');

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

//Quando o bot é startado
client.on("ready", ()=>{
    console.log(`Bot foi iniciado`);
    //client.user.setActivity(`Olá! Eu sou Carmen e estou aqui para ajuda-los em suas tarefas diárias. Em breve, poderemos interagir juntos, INFEERNO!`);
    client.user.setActivity(`Olha p oclin 😎`);
});

//Quando o bot é adicionado em um novo servidor
client.on("guildCreate", guild =>{
    console.log(`O bot entrou no servidor: ${guild.name} (id:${guild.id}). População: ${guild.memberCount} membros!`);
    const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#FFA500')
	.setTitle('CarmenBot')
	.setURL('https://discord.js.org/')
	.setAuthor('Rafael techio', 'blob:https://web.whatsapp.com/31fb7077-3290-4b3e-80a2-c413946abfd3', 'https://twitter.com/TechioT_')
	.setDescription('Olá! Eu sou Carmen e estou aqui para ajuda-los em suas tarefas diárias. Em breve, poderemos interagir juntos, INFEERNO')
	.setThumbnail('https://cdn.discordapp.com/avatars/704713721133400094/10ed29f681db4c97de51d7c39287a56b.png')
	.addFields(
		{ name: 'Regular field title', value: 'Some value here' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
	)
	.addField('Inline field title', 'Some value here', true)
	.setImage('https://i.imgur.com/wSTFkRM.png')
	.setTimestamp()
	.setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');

channel.send(exampleEmbed);
});

//Quando o bot é excluido do servidor
client.on("guildDelete", guild =>{
    console.log(`O bot foi removido do servidor: ${guild.name} (id: ${guild.id})`);
})

//Quando um membro é adicionado ao servidor
client.on("guildMemberAdd", async member =>{
    const channel = member.guild.channels.cache.find(ch => ch.name === 'geral');
    // let fonte = await jimp.loadFont(jimp.FONT_SANS_32_BLACK);
    // let mask = await jimp.read('imagens/mascara.png');
    // let fundo = await jimp.read('imagens/fundo.png');

    // jimp.read(member.displayAvatarURL).then(avatar =>{
    //     avatar.resize(130, 130);
    //     mask.resize(130, 130);

    //     avatar.mask(mask);
    //     fundo.print(fonte, 170, 175, member.username);
    //     fundo.composite(avatar, 20, 60).write('imagens/BoasVindas.png');
    //     channel.send(``, {files: ["imagens/BoasVindas.png"]});
    // }).catch(err =>{
    //     console.log('erro ao carregar a imagem '+err);
    // });
    channel.send("oi "+ member.username);
})

//Quando uma mensagem é enviada
client.on("message", async message =>{
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    //Tratamento do texto recebido
        
    const args = message.content.slice(prefix.length).split(/ +/);
    const commandName = args.shift().toLowerCase();
    const command = client.commands.get(commandName);

    if (!client.commands.has(commandName)) return;

    try {
        command.execute(message, args);
        console.log("Comando <"+commandName+"> executado por <"+message.author.username+"> no servidor <"+message.guild.name+"> no canal <"+message.channel+">");
    } catch (error) {
        console.error(error);
        message.reply('Ocorreu um erro ao tentar executar esse comando!');
    }
        
});

//Setando Token
client.login(token);