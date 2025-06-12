"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const utils_1 = require("./utils");
const prompt = (0, prompt_sync_1.default)();
var positions = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const dashes = "------";
console.log(dashes + "Tic-Tac-Toe" + dashes);
(0, utils_1.board)(positions);
console.log("!Give -1 as an input to Exit!");
const player1 = prompt("What is the name of player 1? ");
if (player1 == "-1") {
    console.log("Programme has been exited");
    process.exit(0);
}
const player2 = prompt("What is the name of player 2? ");
if (player2 == "-1") {
    console.log("Programme has been exited");
    process.exit(0);
}
console.log("Player 1 is " + player1 + " and " + player1 + '\'s symbol is "X"');
console.log("Player 2 is " + player2 + " and " + player2 + '\'s symbol is "O"');
for (let i = 1; i < positions.length; i++) {
    console.log("\n");
    (0, utils_1.board)(positions);
    let currPlayer = i % 2 != 0 ? player1 : player2;
    let symbol = i % 2 == 0 ? "O" : "X";
    let pos = (0, utils_1.askPosition)(prompt, currPlayer, positions);
    positions[pos] = symbol;
    (0, utils_1.checker)(positions, currPlayer, symbol);
    (0, utils_1.board)(positions);
}
console.log("\nResult:");
(0, utils_1.board)(positions);
