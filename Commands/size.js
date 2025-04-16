const { Client, MessageEmbed} = require("discord.js");

const bot = new Client();
module.exports = {
    name: "deperacted-size",
    description: "Rates something; deperacted and should be removed or reworked if you fork this project",
    cooldown: 5,
   
}

module.exports.execute = async (message, args) =>{   

if (!args[0]){
    message.channel.send("I need something to rate, I am not just gonna rate nothing")
}
 else {  
    const ratingfixed = args.toString().replace(/,/g," ");
   let userSize = Math.floor(Math.random() * 12);
    const userSizeEmbed = new MessageEmbed()
                            
                            .setAuthor('Retro Bot', '', 'https://discord.js.org')
                            .setColor('ebdd1c')
                            .setDescription(ratingfixed + " [REDACTED] is " + userSize + " inches")
                                message.channel.send(userSizeEmbed)}}