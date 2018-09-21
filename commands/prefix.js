exports.run = (client, message, args) => {
  if(message.author.id !== client.config.ownerID) {
      if (message.author.id === client.config.darrunID) {
        message.channel.send("You do not have permission to use this command!").catch(console.error);
        console.log("Darrun tried to change the prefix");
      } else {
          if (message.author.id === client.config.fappyID) {
          message.channel.send("Fuck off Fappy! :smugpepe:").catch(console.error);
          console.log("Fappy tried to change the prefix");
        }
      }
    } else {
        let newPrefix = args[0]
        message.channel.send("Prefix is set to "+'"'+newPrefix+'"').catch(console.error);
        client.config.prefix = newPrefix
        console.log("Prefix set to "+'"'+newPrefix);
  }
}