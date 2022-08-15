const { Client, MessageEmbed} = require("discord.js");

const bot = new Client();
module.exports = {
    name: "rate",
    description: "Rates something",
    cooldown: 5,
   
}

module.exports.execute = async (message, args) =>{   

if (!args[0]){
    message.channel.send("I need something to rate, I am not just gonna rate nothing")
}
 else {  
    const ratingfixed = args.toString().replace(/,/g," ");
   let rating = Math.floor(Math.random() * 11);
    const embed112 = new MessageEmbed()
                            
                            .setAuthor('Retro Bot', '', 'https://discord.js.org')
                            .setColor('ebdd1c')
                            .setDescription("I would give " + ratingfixed + " a " + rating + "/10")
                                message.channel.send(embed112)}}