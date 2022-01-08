var PORT = process.env.PORT || 5000;
var express = require("express");
var app = express();

var http = require("http");
var server = http.Server(app);

const mineflayer = require("mineflayer");
const {pathfinder} = require("mineflayer-pathfinder");
const antiafk = require("mineflayer-antiafk");
const v8 = require("v8");
const req = require("express/lib/request");

//console.log(v8.getHeapStatistics());

const totalHeapSize = v8.getHeapStatistics().total_available_size;
let totalHeapSizeInGB = (totalHeapSize / 1024 / 1024 / 1024).toFixed(2);

console.log("Total heap size (bytes) " + totalHeapSize.toString() + ", (GB " + totalHeapSizeInGB.toString() + ")");

const bot = mineflayer.createBot
({
    host: "kackcore.ploudos.me",
    username: "Bot",
    version: "1.9"
})

bot.loadPlugin(antiafk);
bot.loadPlugin(pathfinder);

bot.on("spawn", function()
{
    bot.afk.start();
})