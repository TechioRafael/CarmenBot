module.exports = {
	name: 'expulsar',
	description: 'Inicia uma votação para expulsar um usuário do server (INCOMPLETO)',
	execute(message, args) {
        if (!message.mentions.users.size) {
            return message.reply('você precisa mencionar alguém com "@" se quiser expulsar!');
        }
        const taggedUser = message.mentions.users.first();
    
        message.channel.send(`${message.author.username} iniciou uma votação para expulsar ${taggedUser.username}`);
	},
}