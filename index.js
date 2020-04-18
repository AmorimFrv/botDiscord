const Discord = require('discord.js')

const bot = new Discord.Client();

const token = 'NzAxMTYzMDA2ODU5NDExNTQ5.Xpte_w.Mn4jTOtlmzvskvOzL54YDH1J81Y'

bot.login(token)
bot.on('ready', () =>{
    console.log('Chama Familiann')
})


bot.on('message', msg => {
    if(msg.content = 'Salve'){
        msg.reply('Salve quebrada !')
    }
})