module.exports.run = (bot, msg) => {
    let chn = {
        name: "private-"+msg.author.id,
        type: "text",
    };
    function send(str) {
        msg.guild.channels.find("name", chn.name).send(str);
    }
    function start() {
        send(`<@${msg.author.id}>`);
        send("Hey!");
    }
    //check if channel already exists before creating
    if(msg.guild.channels.find("name", chn.name)) {
    }
    else {
        msg.guild.createChannel(chn.name, chn.type, [{
            id: msg.guild.id,
            deny: ["VIEW_CHANNEL", "SEND_MESSAGES", "READ_MESSAGE_HISTORY"]
        }]).then(channel => {
            channel.overwritePermissions(msg.guild.owner, {
                "VIEW_CHANNEL": true,
                "SEND_MESSAGES": true,
                "READ_MESSAGE_HISTORY": true
            });
            channel.overwritePermissions(msg.author, {
                "VIEW_CHANNEL": true,
                "SEND_MESSAGES": true,
                "READ_MESSAGE_HISTORY": true
            });
        });
    }
};
