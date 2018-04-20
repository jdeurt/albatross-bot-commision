module.exports.run = (bot, msg) => {
    if(msg.member.hasPermission("MANAGE_CHANNELS") || !msg.channel.name.startsWith("private-")) return;
    msg.channel.delete();
};
