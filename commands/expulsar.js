module.exports = {
	name: 'expulsar',
	description: 'Inicia uma votação para expulsar um usuário do server (INCOMPLETO)',
	execute(message, args) {
		// grab the "first" mentioned user from the message
        // this will return a `User` object, just like `message.author`
        if (!message.mentions.users.size) {
            return message.reply('você precisa mencionar alguém com "@" se quiser expulsar!');
        }
        const taggedUser = message.mentions.users.first();
    
        message.channel.send(`${message.author.username} iniciou uma votação para expulsar ${taggedUser.username}`);
	},
}