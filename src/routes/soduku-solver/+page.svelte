<script lang="ts">

  let board: number[][] = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9]
];

function isValid(board: number[][], row: number, col: number, num: number): boolean {
    // Check if num is not already present in the current row, column, and 3x3 subgrid
    for (let i = 0; i < 9; i++) {
        if (
            board[row][i] === num ||
            board[i][col] === num ||
            board[Math.floor(row - row % 3 + i / 3)][Math.floor(col - col % 3 + i % 3)] === num
        ) {
            return false;
        }
    }
    return true;
}

function solveSudoku(board: number[][]): boolean {

    let boardToSolve = board;
    // Find the first empty cell
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (boardToSolve[i][j] === 0) {
                // Try filling the cell with numbers from 1 to 9
                for (let num = 1; num <= 9; num++) {
                    if (isValid(boardToSolve, i, j, num)) {
                        boardToSolve[i][j] = num;
                        // Recursively solve the rest of the puzzle
                        if (solveSudoku(boardToSolve)) {
                            return true;
                        }
                        // If the solution is not possible, backtrack
                        boardToSolve[i][j] = 0;
                    }
                }
                return false;
            }
        }
    }

    console.log("Solved");
    console.log(boardToSolve);
    console.log("should not be solved");
    console.log(board);
    
    
    
    
    // board = boardToSolve;
    
    return true;
}










//     if (solveSudoku(board)) {
//     for (const row of board) {
//         console.log(row.join(" "));
//     }
// } else {
//     console.log("No solution exists.");
// }
console.log("board before solving");

console.log(board);


</script>

<section class="w-full h-screen">
    <div class="p-4 flex justify-center items-center flex-col">
        <h1 class="text-3xl font-semibold">Analysis of Algorithms - Soduku Solver</h1>
        <p>Done by: <strong class="pl-1">Elliot Morrison</strong></p>
    </div>
    <section class="w-full p-3 flex"> 
        <div class="grid grid-cols-9 gap-2 w-fit relative">
            {#each board as row, i}
                {#each row as cell, j}
                    <div class="w-16 h-16 bg-indigo-400 rounded-lg flex justify-center items-center font-bold text-2xl">
                        {cell === 0 ? "" : cell}
                    </div>
                {/each}
            {/each}
            <div class="rounded h-0.5 bg-gray-800 w-full absolute top-1/3 -translate-y-0.5"></div>
            <div class="rounded h-0.5 bg-gray-800 w-full absolute top-2/3"></div>

            <div class="rounded w-0.5 bg-gray-800 h-full absolute left-1/3 -translate-x-0.5"></div>
            <div class="rounded w-0.5 bg-gray-800 h-full absolute left-2/3 "></div>
        </div>
        <div>
            <button class="bg-green-700 hover:bg-green-500 text-white p-2 rounded-lg" on:click={() => solveSudoku(board)}>Solve Board</button>
        </div>
    </section>
</section>
