import { Symbol } from "./types";

export function board(positions: string[]): void {
    console.log("Board:");
    console.log(
        " " +
            positions[1] +
            " " +
            "|" +
            " " +
            positions[2] +
            " " +
            "|" +
            " " +
            positions[3] +
            " "
    );
    console.log("-----------");
    console.log(
        " " +
            positions[4] +
            " " +
            "|" +
            " " +
            positions[5] +
            " " +
            "|" +
            " " +
            positions[6] +
            " "
    );
    console.log("-----------");
    console.log(
        " " +
            positions[7] +
            " " +
            "|" +
            " " +
            positions[8] +
            " " +
            "|" +
            " " +
            positions[9] +
            " "
    );
}

function isValidPos(pos: number, positions: string[]): boolean {
    return (
        !Number.isNaN(pos) &&
        pos >= 1 &&
        pos <= 9 &&
        !Number.isNaN(parseInt(positions[pos]))
    );
}

export function askPosition(
    prompt: (str: string) => string,
    player: string,
    positions: string[]
): number {
    let pos: number = parseInt(
        prompt(player + ", what is you prefered position? ")
    );
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

export function checker(positions: string[], currPlayer: string, symbol: Symbol): void {
    const case1: boolean =
        positions[1] == positions[2] && positions[2] == positions[3];
    const case2: boolean =
        positions[4] == positions[5] && positions[5] == positions[6];
    const case3: boolean =
        positions[7] == positions[8] && positions[8] == positions[9];
    const case4: boolean =
        positions[1] == positions[5] && positions[5] == positions[9];
    const case5: boolean =
        positions[3] == positions[5] && positions[5] == positions[7];
    const case6: boolean =
        positions[1] == positions[4] && positions[4] == positions[7];
    const case7: boolean =
        positions[2] == positions[5] && positions[5] == positions[8];
    const case8: boolean =
        positions[3] == positions[6] && positions[6] == positions[9];
    const winCase: Boolean = case1 || case2 || case3 || case4 || case5 || case6 || case7 || case8;
    if(winCase){
      console.log("\n\n\nCongratulations!! "+currPlayer+" won.");
      console.log("Result:");
      board(positions);
      process.exit(0)
    }
}
