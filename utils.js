"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.board = board;
exports.askPosition = askPosition;
exports.checker = checker;
function board(positions) {
    console.log("Board:");
    console.log(" " +
        positions[1] +
        " " +
        "|" +
        " " +
        positions[2] +
        " " +
        "|" +
        " " +
        positions[3] +
        " ");
    console.log("-----------");
    console.log(" " +
        positions[4] +
        " " +
        "|" +
        " " +
        positions[5] +
        " " +
        "|" +
        " " +
        positions[6] +
        " ");
    console.log("-----------");
    console.log(" " +
        positions[7] +
        " " +
        "|" +
        " " +
        positions[8] +
        " " +
        "|" +
        " " +
        positions[9] +
        " ");
}
function isValidPos(pos, positions) {
    return (!Number.isNaN(pos) &&
        pos >= 1 &&
        pos <= 9 &&
        !Number.isNaN(parseInt(positions[pos])));
}
function askPosition(prompt, player, positions) {
    let pos = parseInt(prompt(player + ", what is you prefered position? "));
    if (pos == -1) {
        console.log("Programme has been exited");
        process.exit(0);
    }
    while (!isValidPos(pos, positions)) {
        console.log("\n\n");
        console.log("!! Warning !!");
        console.log("You have entered invalid position.");
        board(positions);
        pos = parseInt(prompt("Please insert a valid position, "));
        if (pos == -1) {
            console.log("Programme has been exited");
            process.exit(0);
        }
        console.log("\n\n");
    }
    return pos;
}
function checker(positions, currPlayer, symbol) {
    const case1 = positions[1] == positions[2] && positions[2] == positions[3];
    const case2 = positions[4] == positions[5] && positions[5] == positions[6];
    const case3 = positions[7] == positions[8] && positions[8] == positions[9];
    const case4 = positions[1] == positions[5] && positions[5] == positions[9];
    const case5 = positions[3] == positions[5] && positions[5] == positions[7];
    const case6 = positions[1] == positions[4] && positions[4] == positions[7];
    const case7 = positions[2] == positions[5] && positions[5] == positions[8];
    const case8 = positions[3] == positions[6] && positions[6] == positions[9];
    const winCase = case1 || case2 || case3 || case4 || case5 || case6 || case7 || case8;
    if (winCase) {
        console.log("\n\n\nCongratulations!! " + currPlayer + "won.");
        console.log("Result:");
        board(positions);
        process.exit(0);
    }
}
