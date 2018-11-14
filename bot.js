const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = 'R'
const developers = ['320423357709549568'];


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setGame(`~`,'https://www.twitch.tv/Mdax77x')
  client.user.setStatus("Do Not Disturb")
});



client.on('message', message => {
if (message.content.startsWith('السلام عليكم')){
     let ra3d = new Discord.RichEmbed()
  .setColor("#e9ab26")
  .setDescription("**وعليكم السلام ورحمة الله وبركاتة**")
     
     
  message.channel.sendEmbed(ra3d);
    }
});



const bannedwords = [
    "كل زق",
    "كس",
    "كس امك",
    "الله يلعن",
    "قحبه",
    "خنيث"

  ];

client.on('message',  message => {
  if(bannedwords.some(word => message.content.includes(word))) {
    message.delete()
    message.reply(" احترم نفسك , يمنع الشتم في خادمنا او سوف تتعرض الي  ميوت ").then(msg => {msg.delete(5000)});;
  };
});




client.on('message', message => {
    let prefix = 'R';
    
    if(message.content.startsWith(prefix + 'getid')) {
        let mentionned = message.mentions.users.first();
            if(mentionned) {
                var c = mentionned;
            } else {
                var c = message.author;
            }
                let embed = new Discord.RichEmbed()
                    .setColor("RANDOM")
                    .setTitle(`**[ ${c.id} ]**`);

                    message.channel.sendEmbed(embed);

    }
});







client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!developers.includes(message.author.id)) return;

if (message.content.startsWith('Rwc')) {
client.user.setActivity(argresult, {type:'WATCHING'});
  client.user.setStatus("Do Not Disturb")
    message.channel.send(` ** ${argresult} \ ** `)
} else 
if (message.content.startsWith('Rls')) {
client.user.setActivity(argresult , {type:'LISTENING'});
  client.user.setStatus("Do Not Disturb")
    message.channel.send(` ** ${argresult} \ ** `)
} else 
if (message.content.startsWith('Rst')) {
  client.user.setGame(argresult, "https://www.twitch.tv/MeeRcY");
  client.user.setStatus("Do Not Disturb")
   message.channel.send(` ** ${argresult} \ ** `)
}
});

client.on('message', message => {
        if (!developers.includes(message.author.id)) return;
  if (message.content === '0..') {
  let channel = client.channels.get('511744532992229377');

  channel.join()
  .then(connection => console.log('Connected'))
  .catch(console.error);
    
  }
          
});
client.login(process.env.BOT_TOKEN);
