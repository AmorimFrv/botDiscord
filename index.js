const Discord = require('discord.js')

const bot = new Discord.Client();

const token = 'NzAxMTYzMDA2ODU5NDExNTQ5.XptjsQ.M-3ahU2nk7gvuBZLJIDYjqNb_ts'

bot.login(token)
bot.on('ready', () =>{
    console.log('Chama Familiann')
})


bot.on('message', msg => {
    if(msg.content === 'Salve'){
        msg.reply('Cauê Gostoso !')
    }
})