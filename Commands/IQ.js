const { Client, MessageEmbed} = require("discord.js");

const bot = new Client();
module.exports = {
    name: "iq",
    description: "Rates something",
    cooldown: 5,
   
}

module.exports.execute = async (message, args) =>{   

if (!args[0]){
    message.channel.send("You have a IQ of 0")
}
 else {  
    const ratingfixed = args.toString().replace(/,/g," ");
   let rating = Math.floor(Math.random() * 250);
    const embed112 = new MessageEmbed()
                            
                            .setAuthor('Retro Bot', '', 'https://discord.js.org')
                            .setColor('ebdd1c')
                            .setDescription(ratingfixed + " has a IQ of " + rating)
                                message.channel.send(embed112)}}