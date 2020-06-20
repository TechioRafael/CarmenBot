module.exports = {
	name: 'cancelar',
    description: 'Cancela alguém do server por motivos completamente plausíveis',
    usage: '<usuario>',
    tag: 'mensagem',
    only_dev: false,
	execute(message, args) {
        if (!message.mentions.users.size) {
            return message.channel.send(`Você precisa mencionar alguém com "@" para ser cancelado!`);
        }

        var motivos = Array("machista", "fã do Felipe Neto", "apoiador(a) do Bolsonaro", "terraplanista", "ancap", "gado", "e-girl", "puxa-saco", "militante", "corno(a)", "diferente do Viniccius13 e usar criativo no Minecraft",
        "main Singed", "gamer", "jogador de lol"
        )

    
        const cancelar = message.mentions.users.map(user => {
            return message.channel.send(`Cancelado do dia: ${user.username} por ser ${motivos[Math.floor(Math.random() * motivos.length)]}`);
        });
	},
}