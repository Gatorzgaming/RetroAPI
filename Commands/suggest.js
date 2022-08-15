const { Client, MessageEmbed, member,} = require("discord.js");
const bot = new Client();

module.exports = {
    name: "suggest",
    description: "E a sports :D",
    cooldown: "5",
   
}

module.exports.execute = async (message, args, guild) =>{
   
if (!args[0]){
    message.channel.send("You have to suggest something")
}
 else {  

    const suggestchannel = message.guild.channels.cache.find(x => x.id == "851460626509070337")
    const suggestonfixed = args.toString().replace(/,/g," ");
    suggestchannel.send(new MessageEmbed().setTitle("**Suggestion for Retro Studios**").setColor('5600a1').setDescription(suggestonfixed).setTimestamp().setFooter('Requested by ' + message.author.tag , message.author.avatarURL()))}}
