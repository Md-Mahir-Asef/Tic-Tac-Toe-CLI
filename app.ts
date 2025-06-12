import PromptSync from "prompt-sync";
import { board, askPosition, checker } from "./utils";
import { Symbol } from "./types"; 

const prompt = PromptSync();

var positions = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const dashes: string = "------";
console.log(dashes + "Tic-Tac-Toe" + dashes);

board(positions);
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
    board(positions);
    let currPlayer = i % 2 != 0 ? player1 : player2;
    let symbol: Symbol = i % 2 == 0 ? "O" : "X";
    let pos = askPosition(prompt, currPlayer, positions);
    positions[pos] = symbol;
    checker(positions, currPlayer, symbol)
    board(positions);
}

console.log("\nResult:");
board(positions);
