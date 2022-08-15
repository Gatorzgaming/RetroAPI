const { Client, MessageEmbed} = require("discord.js");
const ballresponses = require('./resorces/8ball.json');
const bot = new Client();
module.exports = {
    name: "8ball",
    description: "Its a 8ball command what do you think it does?",
    cooldown: 5,
   
}

module.exports.execute = async (message) =>{      
const embed121 = new MessageEmbed()
.setTitle("**8Ball**")
.setAuthor('Retro Bot', '', 'https://discord.js.org')
.setColor('550b70')
.setDescription(`:8ball: ${ballresponses[Math.floor(Math.random() * 21) + 1]}`)
message.channel.send(embed121);
}