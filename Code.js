const Discord = require("discord.js");
const client = new Discord.Client();
client.on('ready', () => {
  client.user.setGame(`Sleep`,'https://www.twitch.tv/By:A7MD');
  console.log('BOT ONLINE');
});
client.login('NDA4Mzk2Mzg5MjkxMzkzMDI1.Dq8Kbw.gApSvAa680ueiHxfQZ9rnMq0wvM');