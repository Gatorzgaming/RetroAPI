const { Client, MessageEmbed } = require("discord.js");
const apilinks = require("./resorces/links.json");
const bot = new Client()
module.exports = {
    name: "help",
    description: "Gives the Help Command Embed",
    cooldown: 5,
   
}

module.exports.execute = async (message, Args30) =>{
    if (message.content === "!help events"){
    const embed48 = new MessageEmbed()
    .setTitle("**Event Help Menu**")
    .setThumbnail(apilinks.PFP)
    .setAuthor('Retro Bot', apilinks.PFP, 'https://discord.js.org')
    .setColor('0000b3')
    .addFields(
        { name: '!event - **Mod Command**', value: '`Make a event, Format: Date - Time - Game - Type - Name  `' , inline: false },
        { name: '!ne or !nextevent', value: '`Shows the next event, Not added yet`', inline: false },
        { name: '!eventlist', value: '`Shows a list of upcomming events, Not added yet`', inline: false },
        { name: '!event edit - **Mod Command**', value: '`Lets you edit or remove a event, Not added yet`', inline: false },
    )
    message.channel.send(embed48); 
    }
    else {
    if(message.content === "!help fun"){
   
        const embed42 = new MessageEmbed()
        .setTitle("**Fun Help Menu**")
        .setThumbnail(apilinks.PFP)
        .setAuthor('Retro Bot', apilinks.PFP, 'https://discord.js.org')
        .setColor('0000b3')
        .addFields(
            { name: '!rate', value: '`Rates something /10`' , inline: false },
            { name: '!8ball', value: '`Tells your totaly not fake forture`', inline: false },
            { name: '!pp', value: '`Mesures PP using RNG`', inline: false },
            { name: '!iq', value: '`Tells how big brain someone is`', inline: false },
            { name: '!coinflip', value: '`Heads or Trails?`', inline: false },
    
        )
    
        message.channel.send(embed42);  
    }
    else {

        const embed5 = new MessageEmbed()
        .setTitle("**Help Menu**")
        .setThumbnail(apilinks.PFP)
        .setAuthor('Retro Bot', apilinks.PFP, 'https://discord.js.org')
        .setColor('0000b3')
        .addFields(
            { name: '**Event Commands**', value: '`!help events`' , inline: true },
            { name: '**Moderation Commands**', value: '`Comming soon`', inline: true },
            { name: '**RoVer Commands**', value: '`Comming soon`', inline: true })
        .addFields(  
            { name: '**Fun Commands**', value: '`!help fun`', inline: true },
            { name: '**Music Commands**', value: '`Comming soon`', inline: true },
            { name: '**Utility/Debug Commands**', value: '`!help other`', inline: true }
        )
        message.channel.send(embed5)
    
    }
    }};