const express = require("express");
const { Client, RichEmbed } = require("discord.js");
const app = express();
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if (new Date().getTime() - start > milliseconds) {
      break;
    }
  }
}
const http = require("http");
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get("http://boost-aktif.glitch.me/");
}, 3000);
const Discord = require("discord.js");
const client = new Discord.Client();
const data = new Map();

const tokenadam1 = new Discord.Client();
const tokenadam2 = new Discord.Client();
const tokenadam3 = new Discord.Client();
const tokenadam4 = new Discord.Client();


tokenadam1.on('message', async msg => {
  if (msg.content.toLowerCase() === "tnt0") {
      const streamOptions = { seek: 0, volume: 50 };
      var voiceChannel = msg.member.voiceChannel;
        voiceChannel.join().then(connection => {
        const stream = ytdl('', { filter : 'audioonly' });
        const dispatcher = connection.playStream(stream, streamOptions);
        })
  }
})

tokenadam2.on('message', async msg => {
  if (msg.content.toLowerCase() === "lpg0") {
      const streamOptions = { seek: 0, volume: 50 };
      var voiceChannel = msg.member.voiceChannel;
        voiceChannel.join().then(connection => {
        const stream = ytdl('', { filter : 'audioonly' });
        const dispatcher = connection.playStream(stream, streamOptions);
        })
  }
})

tokenadam3.on('message', async msg => {
  if (msg.content.toLowerCase() === "rvt0") {
      const streamOptions = { seek: 0, volume: 50 };
      var voiceChannel = msg.member.voiceChannel;
        voiceChannel.join().then(connection => {
        const stream = ytdl('', { filter : 'audioonly' });
        const dispatcher = connection.playStream(stream, streamOptions);
        })
  }
})

tokenadam4.on('message', async msg => {
  if (msg.content.toLowerCase() === "klt0") {
      const streamOptions = { seek: 0, volume: 50 };
      var voiceChannel = msg.member.voiceChannel;
        voiceChannel.join().then(connection => {
        const stream = ytdl('https://www.youtube.com/watch?v=V7XwZ4Mr3Wk', { filter : 'audioonly' });
        const dispatcher = connection.playStream(stream, streamOptions);
        })
  }
})

tokenadam1.login(process.env.tokenadam1);
tokenadam2.login(process.env.tokenadam2);
tokenadam3.login(process.env.tokenadam3);