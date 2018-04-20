module.exports.run = (bot, msg) => {
    if(msg.author.id != msg.guild.ownerID || !msg.channel.name.startsWith("private-")) return;
    msg.channel.delete();
};
