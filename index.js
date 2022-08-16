// RetroAPI made by Gatorgaming made mostly of bunch of code from StackOverflow that I have stitched together 

//Call APIs and Config Files
const { Client, MessageEmbed, Activity, RoleManager, Message, member, GuildChannel, Guild,} = require('discord.js');
const Discord = require('discord.js')
const fs = require('fs');
const dumfile = require("./package.json"); 
const config = require("./config.json")
//Token check
if(config.token == "TOKEN GOES HERE"){ 
    console.log('\x1b[31m%s\x1b[0m', "You must add a token in the config.json file, please visit https://discord.com/developers/applications and get a bot token"); process.exit(); };

//Alet system
if(config.joinchannel == "Join_alert_channel_ID_goes_here"){console.warn('\x1b[33m%s\x1b[0m', "Warning:");console.log(" There is not channel ID valve for a join channel in config.json  IT WILL cause a FATIAL error if someone joins or leaves the server! For more information please refrence:  https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-#:~:text=On%20Android%20press%20and%20hold,name%20and%20select%20Copy%20ID.");};
if(config.logchannel = 'Logs_channel_ID_goes_here'){console.warn('\x1b[33m%s\x1b[0m', "Warning:");console.log(" There is not channel ID for a log channel in config.json certian acctions will cause a FATIAL error. For more information please refrence:  https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-#:~:text=On%20Android%20press%20and%20hold,name%20and%20select%20Copy%20ID.");};

//Prefix is not yet used
const prefix = "!";

//call bot and bot token
const token = config.token;
const bot = new Client();


//File system start up
bot.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./Commands').filter(file => file.endsWith('.js'));
var currenttime = Date();
for (const file of commandFiles) {
    const command = require(`./Commands/${file}`);
    bot.commands.set(command.name, command);
}

process.on('unhandledRejection', (reason, promise) => {
    console.log('Unhandled Rejection at:', promise, 'reason:', reason);
    // Application specific logging, throwing an error, or other logic here
  });
  
bot.cooldowns = new Discord.Collection();

bot.on('message', async (message)  => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const Args30 = message.content.slice(prefix.length).split(/ +/);
    const commandName = Args30.shift().toLowerCase();

    if (!bot.commands.has(commandName)) return;
    const command = bot.commands.get(commandName)
        || bot.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

    if (!command) return;

    if (command.guildOnly && message.channel.type !== 'text') {
    return message.reply('I can\'t execute that command inside DMs!');
}


    if (command.args && !args.length) {
        let reply = `Insufficient arguments provided!`;

        if (command.usage) {
            reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
        }

        return message.channel.send(reply);
    }
    try {
        command.execute(message, Args30);
    } catch (error) {
        console.error(error);
        message.reply('there was an error trying to execute that command!');
        console.log(command)
    }
})


// Attempt to connect to discord
bot.login(token);


bot.on('guildMemberRemove', member => {
    let servermembercountwhenmeberleave = bot.guilds.cache.get('773939003480342548').memberCount
    bot.user.setActivity(servermembercountwhenmeberleave + " Users, someone left :C", {
    type: 'WATCHING',
    
    }).catch(console.error);
	const embedmeberleave = new MessageEmbed()
    .setTitle("Memmber Left")
    .setThumbnail('https://cdn.discordapp.com/attachments/774316820396113922/825881191999078450/97ae8f7b-18dd-48de-b8b2-c6cc0677f245_08fe25150bf9ea16b56d29266e0c0ad3_2.jpg')
    .setAuthor(config.APIname, '', 'https://discord.js.org')
    .setColor('0000b3')
    .setDescription(`${member.user.tag} left the guild`);
    bot.channels.cache.get(config.joinchannel).send(embedmeberleave); 
});
bot.on('guildMemberAdd', async member =>{
    
    let servermembercount = bot.guilds.cache.get('773939003480342548').memberCount
    
    const welcomemessages = {
        "1":"Welcome" + "<@"+ member.user +"> "+" We hope you brought pizza",
        "2":"<@"+ member.user +"> " +"  must have traveled many years to get here",
        "3":"Welcome to the server " + "<@"+ member.user +"> " ,
        "4":"A portal apreaded and <@"+ member.user +"> Came out of it",
        "5":"A wild <@"+ member.user +"> Appeared ",
        "6":"<@"+ member.user +"> Has arived, Quick hide the bananas!",
        "7":"<@"+ member.user +"> has arrived. Party's over.",
        "8":"It's a bird! It's a plane! Nevermind, it's just <@"+ member.user +">",
        "9":"Glad you're here <@"+ member.user +">",
        "10":"<@"+ member.user +"> just showed up!",
        "11":"We've been expecting you <@"+ member.user +">",
        "12":"<@"+ member.user +"> just poped into the server!",
        "13":"Lets give a warm welcome to <@"+ member.user +">",
        "14":"<@"+ member.user +"> is here, as the prophecy foretold",
        "15":"**PIZZA IS HERE**, wait never mind it's just <@"+ member.user +">",

    }
    
    const embedwelcome = new MessageEmbed()
            .setTitle("**Welcome**")
            .setThumbnail(member.user.avatarURL())
            .setAuthor(config.APIname, '', 'https://discord.js.org')
            .setColor('0000b3')
            .setDescription(`${welcomemessages[Math.floor(Math.random() * 10) + 1]} ` + " The server now has " + servermembercount + " members!")
        
            bot.channels.cache.get("825810891169464361").send(embedwelcome) 
            const joinlogsembed = new MessageEmbed()
.setTitle("**Auto Loging**")
.setThumbnail(member.user.avatarURL)
.setAuthor(config.APIname, '', 'https://discord.js.org')
.setColor('0000b3')
.setDescription("<@" + member + ">" + " Joined the server at " + currenttime )

bot.channels.cache.get("774316820396113922").send(joinlogsembed); 


})
//STATUS CONTROLER
setInterval(myMethod, 30000);

function myMethod( )
{
    let servermembercountforstatus = bot.guilds.cache.get('773939003480342548').memberCount
    bot.user.setActivity(servermembercountforstatus + " Members", {
        type: 'WATCHING',
        
        }).catch(console.error);
        setTimeout(function(){
            bot.user.setActivity("Retro Bot "+dumfile.version + " | !help", {
                type: 'PLAYING',
            }).catch(console.error);
        }, 10000);
        setTimeout(function(){
            bot.user.setActivity("80s Music", {
                type: 'LISTENING',
            }).catch(console.error);
        }, 10000);
        setTimeout(function(){
            bot.user.setActivity("With discord.js V13", {
                type: 'PLAYING',
            }).catch(console.error);
        }, 10000);
        setTimeout(function(){
            bot.user.setActivity("retroapi.glitch.me", {
                type: 'WATCHING',
            }).catch(console.error);
        }, 10000);

    
}
// Client Login
;bot.on('ready', () =>{
    let servermembercountforstatus = bot.guilds.cache.get('773939003480342548').memberCount
    console.log('\x1b[35m%s\x1b[0m',config.APIname+" " + dumfile.version + " Loaded | Bot Status: Online")
    bot.user.setActivity(servermembercountforstatus + " Racers", {
    type: 'WATCHING',
    
    }).catch(console.error);

    
    
  //check bot ping 
});bot.on('message', message =>{
    if(message.content === "!ping"){
    message.channel.send(`🏓 Latency is ${Date.now() - message.createdTimestamp}ms. API Latency is ${Math.round(bot.ws.ping)}ms`);
}});
//sub commands to be edited
;bot.on('message', message =>{
    if(message.content === "!sub races"){
        let role = message.member.guild.roles.cache.find(role => role.name === "Race Pings");

        if (role) message.guild.members.cache.get(message.author.id).roles.add(role);{message.channel.send("Role added")}
        
    }});
    ;bot.on('message', message =>{
        if(message.content === "!unsub races"){
            let role1 = message.member.guild.roles.cache.find(role => role.name === "Race Pings");
    
            if (role1) message.guild.members.cache.get(message.author.id).roles.remove(role1);{message.channel.send("Role Removed")}
            
        }});       
       



;
;bot.on('message', message =>{
    if(message.content === "!apply"){
    message.reply('Staff aplicaons are currently closed')
}});
//PLACEHOLDER COMMAND
/*;bot.on('message', async message =>{
    if(message.content.includes("discord.gift")){
    message.delete({number : 1 , reason : "Gifts can be autoclaimed"})
    message.author.send("Please don't post gift links as people autoclaim them, insted DM a staff member to make a giveaway!")
}});
*/



//Client Commands BEING REWROTE IN NEXT VERSION
;bot.on('message', message=>{
    const args = message.content.slice(prefix.length).trim().split(" ");
    switch(args[0]){
        case 'poll':
            let msgArgs = args.slice(1).join(" ");
        
            message.channel.send("**" + msgArgs + "**").then(MessageReaction => {
                MessageReaction.react("⬆️");
                MessageReaction.react("⬇️");
               
            })
            break;
            
        case 'event':
            //Checks the perms of the user
            if (message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")){
                console.log("Post used");
            }
           //If false a error is sent
            else {message.channel.send("You don't have permission to use this command") 
            break; }

        
            //Checks to make sure all Args have a value
            if(!args[5]){
                message.channel.send("Error Varible not found Varibles are Date - Time - Game - Type - Name.")
                break;
            }
            var date = args[1]
            var time = args[2]
            var game = args[3]
            var type = args[4]
            var eventname = args[5]
            const embed = new MessageEmbed()
            .setTitle(eventname)
            .setColor(0xFF0000)
            .setDescription(`Event type: ${type}
            Event Date: ${date}
            Event Time: ${time}
            Game Link: ${game}.`)
            .setFooter(message.member.user.username);
            bot.channels.cache.get('825749191551877140').send(embed);
            const embed78 = new MessageEmbed()
            .setTitle("**Auto Loging**")
            .setThumbnail('')
            .setAuthor(config.APIname, '', 'https://discord.js.org')
            .setColor('0000b3')
            .setDescription(message.member.user.username + " Made a new event")
            .setFooter(currenttime)
        
            bot.channels.cache.get("774316820396113922").send(embed78); 
            break;

         case 'post':
             //Checks perms
            if (message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")){
                console.log("Post used");
            }
                else break;
                //Add a error message to false perms
                if(!args[3]){
                    message.channel.send("Error Varible not found Varibles are channel - name - Info - Type - Notes.")
                    break;
                }
             //Checks to make sure all Args have value, to be updated 
                var channelname = args[1]
                if(channelname.includes(Number)){
                    var name = args[2]
                    var game1 = args[3]
                    
                    let msgArgs = args.slice(4).join(" ");
                    var saveaegs = msgArgs
                    const embedforpost = new MessageEmbed()
                    .setTitle(`${name} ${game1}`)
                    .setColor("550b70")
                    .setDescription(` ${msgArgs}`)
                     bot.channels.cache.get(channelname).send(embedforpost);}
                     const embed58 = new MessageEmbed()
    .setTitle("**Auto Loging**")
    .setThumbnail(config.PFPurl)
    .setAuthor(config.APIname, '', 'https://discord.js.org')
    .setColor('0000b3')
    .setDescription(message.member.user.username + " Used !post, posting "  + "```"+ saveaegs + "```"+" | In <#" + channelname + ">")
    .setFooter(currenttime)

    bot.channels.cache.get("774316820396113922").send(embed58); 

                    break;
         
    
        
      //Close Client Command area        
     }})
//Mod Logs handler 
bot.on("messageDelete", async (messageDelete) => {
    // Add latency as audit logs aren't instantly updated, adding a higher latency will result in slower logs, but higher accuracy.
  
    // Fetch a couple audit logs than just one as new entries could've been added right after this event was emitted.
    const fetchedLogs = await messageDelete.guild.fetchAuditLogs({
      limit: 6,
      type: 'MESSAGE_DELETE'
    }).catch(() => ({
      entries: []
    }));
  
    const auditEntry = fetchedLogs.entries.find(a =>
      // Small filter function to make use of the little discord provides to narrow down the correct audit entry.
      a.target.id === messageDelete.author.id &&
      a.extra.channel.id === messageDelete.channel.id &&
      // Ignore entries that are older than 20 seconds to reduce false positives.
      Date.now() - a.createdTimestamp < 20000
    );
  
    // If entry exists, grab the user that deleted the message and display username + tag, if none, display 'Unknown'. 
    const executor = auditEntry ? auditEntry.executor.tag : 'Unknown';
  
    // Finally, prepare the embed and send the log. (using similar code posted by thread author but improved)
  
    // <Discord>.MessageEmbed for v12, <Discord>.RichEmbed for older.
    const DeleteEmbed = new MessageEmbed()
      .setTitle("Message Deleted")
      .setColor("b5160b")
      .addField("Author", messageDelete.author.tag, true)
      .addField("Guild",messageDelete.guild.name, true)
      // New field for user which deleted the message.
      .addField("Deleted By", executor, true)
      .addField("Channel", messageDelete.channel, true)
      // Messages can be empty too, but I won't be going over how to include embeds/attachments, just displaying 'None' instead to avoid undefined/null.
      .addField("Message", "```" + messageDelete.content + "```" || "None")
      .setFooter(`Message ID: ${messageDelete.id} | Author ID: ${messageDelete.author.id}`);
  
      bot.channels.cache.get(config.logchannel).send(DeleteEmbed); 
    });