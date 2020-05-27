module.exports = {
	name: 'user',
    description: 'Retorna algumas informações dos usuários que tu me passar (v. 1.0)',
    usage: '<usuario 1> <usuario 2>',
	execute(message, args) {
        if (!message.mentions.users.size) {
            return message.channel.send(`Seu username: ${message.author.username}\nSeu ID: ${message.author.id}\nSeu avatar: ${message.author.displayAvatarURL({ format: "png", dynamic: true })}`);
        }
        const avatarList = message.mentions.users.map(user => {
            return message.channel.send(`Username: ${user.username}\nID: ${user.id}\nAvatar: ${user.displayAvatarURL({ format: "png", dynamic: true })}`);
        });
        message.channel.send(avatarList);
	},
}
