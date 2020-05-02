const Discord = require('discord.js')
const ytdl = require('ytdl-core')

const bot = new Discord.Client();

const token = 'NzAxMTYzMDA2ODU5NDExNTQ5.XqDT8g.uTcDTyQSnxyt-L3bMIHw-_L80oU'

bot.login(token)
bot.on('ready', () =>{
    console.log('Bot inicializado')
})


bot.on('message', msg => {
    if(msg.content === 'Salve'){
        msg.reply('Salvee !')
    }else return 0;
})


bot.on('message', async message => {
    if(!message.guild) return;
    if(message.content === '!join'){
        if(message.member.voice.channel){
            const connection = await message.member.voice.channel.join()
             message.reply('Testando')
            const reprodutor =  connection.play(ytdl('https://www.youtube.com/watch?v=ABxvIObm_3I', {filter: 'audioonly'}))
            
        }else{
            message.reply('Você precisa entrar no canal primeiro!')
        }
    }
})

bot.on('message', async message2 => {
    instrucaoCompleta = message2.content.toString()
    //console.log(instrucaoCompleta)
    instrucaoArray = instrucaoCompleta.split(' ').splice(0)
    //console.log(instrucaoArray)
    urlString = instrucaoArray[1].toString()
    //console.log(urlString)
    playString = instrucaoArray[0].toString()

    if(!message2.guild) return;
    if(playString === '!play'){
        if(message2.member.voice.channel){
            const connection = await message2.member.voice.channel.join()
            const reprodutor = connection.play(ytdl(urlString, {filter: 'audioonly'}))
            reprodutor.setVolume(0.1)
        }
        else{
            message.reply('Ocorreu um erro xd')
        }
    }
})






