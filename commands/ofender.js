module.exports = {
	name: 'ofender',
    description: 'ofende profundamente alguém do server',
    usage: '<usuario>',
    only_dev: false,
    tag: 'mensagem',
	execute(message, args) {
        if (!message.mentions.users.size) {
            return message.channel.send(`Você precisa mencionar alguém com "@" para ser cancelado!`);
        }

        var motivos = Array("da uma sugada aqui", "vai tomar no cu", "sucumba", "nerdola"
        )

    
        const avatarList = message.mentions.users.map(user => {
            return message.channel.send(`${user.username}, ${motivos[Math.round(Math.random() * motivos.length)]}`);
        });
	},
}