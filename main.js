#!/usr/bin/env node
let path = require("path");

let inputArr = process.argv.slice(2);
let commandsPath=path.join(__dirname, "commands");
let helpObj = require(path.join(commandsPath, "help.js"));
let treeObj = require(path.join(commandsPath, "tree.js"));
let organizeObj = require(path.join(commandsPath, "organize"));

let command = inputArr[0];

switch (command) {
  case "tree":
    treeObj.treeKey(inputArr[1]);
    break;
  case "organize":
    organizeObj.organizeKey(inputArr[1]);
    break;
  case "help":
    helpObj.helpKey();
    break;
  default:
    console.log("Please input right command");
    break;
}
