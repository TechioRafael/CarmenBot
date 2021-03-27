const embedConstructor = require('../../Helpers/EmbedConstructor');

module.exports = {
    name: 'roll',
    description: 'Joga um (ou mais) dados',
    execute: (message, args) => {
        let lados = args[0] && Number(args[0]) ? args[0] : 4;
        let quantidade = args[1] && Number(args[1]) ? args[1] : 1;

        // Limiters
        lados = lados > 200 ? 200 : lados;
        quantidade = quantidade > 10 ? 10 : quantidade;

        for(i = 0; i < quantidade; i++){
            const embed = embedConstructor.getEmbedTemplate();

            message.channel.send(embed.setTitle(`D${lados}`).addField('Seu resultado foi: ', Math.floor(Math.random() * lados) + 1))
        }
        
    }
}