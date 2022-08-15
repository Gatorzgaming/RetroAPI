const { Client, MessageEmbed } = require("discord.js");
const apilinks = require("./resorces/links.json");
const bot = new Client()
module.exports = {
    name: "rules",
    description: "Gives the Help Command Embed",
    cooldown: 5,
   
}

module.exports.execute = async (message) =>{
        message.channel.send("https://cdn.discordapp.com/attachments/774316820396113922/850374679109697556/PhotoFunia-1622207253.jpg")
    
}