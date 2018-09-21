exports.run = (client, message, args) => {
    message.channel.send(args[0]).catch(console.error);
}