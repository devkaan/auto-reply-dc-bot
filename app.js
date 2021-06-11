const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json")
const fs = require("fs")
const readLastLines = require('read-last-lines');
require('./files/tools')
require("./files/words")
const SimpleNodeLogger = require('simple-node-logger'),
    opts = {
        logFilePath: 'log.log',
        timestampFormat: 'YYYY-MM-DD HH:mm:ss'
    },
    log = SimpleNodeLogger.createSimpleLogger(opts);
require('dotenv').config()


function isNumber(val) {
    return typeof val === 'number';
}

const version = "1.0.0", developerID = "317264858674626560", sec = 20
client.on('ready', () => {
    channelID = "844157701500043334"
    const channel = client.channels.cache.find(channel => channel.id === channelID)

    // console.log("\x1b[41m ");
    setInterval(() => {
        randomNum = Math.floor(Math.random() * wordsArr.length)
        msgText = wordsArr[randomNum]
        channel.send(msgText)
    }, sec * 1000 * 60)
    console.log(`Logged in as ${client.user.tag}! Current version ${version}. Developed by github.com/devkaan.`);
});
client.on('message', message => {
    try {
        var serverid = message.guild.id
        var servername = message.guild.name
        var userid = message.author.id
        var username = message.author.username + "#" + message.author.discriminator
    } catch (error) {
    }
    isBot = message.author.bot
    if (!isBot && wordsArr.indexOf(message.content.toLowerCase()) != -1) {
        client.users.fetch(userid, false).then((user) => {
            randomNum = Math.floor(Math.random() * wordsArr.length)
            msgText = wordsArr[randomNum]
            try {
                user.send(msgText);
            } catch (error) {
                console.log("errooooooooor");
            }
        });
    }
});

client.login(process.env.BOT_TOKEN);

