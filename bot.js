const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "-";
var adminprefix = '-'


const developers = ["599198480036003850"]
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'stg')) {
    client.user.setGame(argresult);
      message.channel.send(`**✅   ${argresult}** , #**by Marvin**`)
  } else 
     if (message.content === (adminprefix + "lv")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith(adminprefix + 'stw')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`**✅   ${argresult}** , #**by Marvin**`)
  } else 
  if (message.content.startsWith(adminprefix + 'stl')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**✅   ${argresult}** , #**by Marvin**`)
  } else 
  if (message.content.startsWith(adminprefix + 'sts')) {
    client.user.setGame(argresult, "https://www.twitch.tv/mu5t6f6");
      message.channel.send(`**✅** , #**by Marvin**`)
  }
  if (message.content.startsWith(adminprefix + 'stnm')) {
  client.user.setUsername(argresult).then
      message.channel.send(`Changing The Name To ..**${argresult}** by Marvin`)
} else
if (message.content.startsWith(adminprefix + 'stav')) {
  client.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** by Marvin`);
}
});


client.login(process.env.BOT_TOKEN);// 
