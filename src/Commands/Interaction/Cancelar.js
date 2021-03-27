module.exports = {
    name: 'cancelar',
    description: 'Cancela alguém do servidor por motivos completamente plausíveis',
    execute: (message, args) => {
        const motivos = 
        ["ser ANCAP", "ser Kpoper", "jogar free-fire", "jogar incendio de baixo custo monetário", 
        "ser mono fadinha", "jogar jogo de fadinha", "ficar vendo vídeo de carro no youtube"]

        if(!message.mentions.users.size){
            message.channel.send(`Cancelado do dia: ${message.author} por não ter marcado ninguém`);
        }else{
            message.mentions.users.map(user => {
                message.channel.send(`${user} cancelado por ${motivos[Math.floor(Math.random() * motivos.length)]}`)
            })
        }
    }
}