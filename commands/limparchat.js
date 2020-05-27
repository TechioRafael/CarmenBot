module.exports = {
	name: 'limparchat',
    description: 'Exclui o número de mensagens passadas por parâmetro',
    usage: '<numero de mensagens a serem excluidas>',
	execute(message, args) {
		const amount = parseInt(args[0]) + 1;
    
        if (isNaN(amount)) {
            return message.reply('Isso não é um número válido');
        } else if (amount <= 1 || amount > 100) {
            return message.reply('Só consigo limpar entre a primeira e a 99° mensagem :(');
        }
        
        message.channel.bulkDelete(amount, true).catch(err => {
            console.error(err);
            message.channel.send('Um erro está ocorrendo ao tentar limpar as mensagens!');
        });
    
	},
}