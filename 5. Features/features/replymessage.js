module.exports = (client) => {
    client.on("message", message => {

        function reply(ask, answer) {
            if (message.content.toLowerCase() === ask && !message.author.bot) {
                return message.channel.send(answer)
            }
        }

        reply('test', 'ajg di bales')
        reply('tes', 'tastestastes')
        // reply('halo', 'oitt')
    })
}
