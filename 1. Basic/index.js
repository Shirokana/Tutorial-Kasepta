const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
    console.log(`${client.user.username} is online!`)
})

client.login('OTkzMDQwNjY4ODA3MTUxNzM2.GY20yE.QofA1NP6XxUHi3sVFmkyGuoPywFFlGUh10-eMA')
