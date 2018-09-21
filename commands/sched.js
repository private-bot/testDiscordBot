const api = "https://www.googleapis.com/calendar/v3/calendars/pso2emgquest@gmail.com/events?key=AIzaSyCqdY0eto4JkTE_67GqB-JvaeNMBWm3I7k"
const snekfetch = require('snekfetch')
const Discord = require('discord.js')

exports.run = (bot, message, args) => {
  snekfetch.get(api).then(r => {
    let body = r.body;
    let id = args[0];
    
    let entry = r.body.find(post => post.id === id).catch(console.error);
    console.log(entry);
    
    let embed = new Discord.RichEmbed()
      .setAuthor(entry.title)
    
    message.channel.send({embed: embed});
    });
}