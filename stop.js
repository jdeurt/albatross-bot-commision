module.exports.run = (bot, msg) => {
    if(!msg.member.hasPermission("MANAGE_MESSAGES") || !msg.channel.name.startsWith("private-")) return;
    msg.channel.delete();
};
