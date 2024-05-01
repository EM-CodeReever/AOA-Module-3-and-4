<script lang="ts">
import {AL_ESCARGOT,MONSTER,MEDIUM2,MEDIUM,EASY,EASY2} from '$lib/SodukuBoards'
// N is the size of the 2D matrix N*N
const N = 9;
let choice = 0;

let grid: number[][] = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0]
];

function chooseBoard(num: number){
    if(num == 0) return AL_ESCARGOT;
    if(num == 1) return MONSTER;
    if(num == 2) return MEDIUM2;
    if(num == 3) return MEDIUM;
    if(num == 4) return EASY;
    if(num == 5) return EASY2;
}



// Checks whether it will be 
// legal to assign num to the
// given row, col
function isLegal(grid: number[][], row: number, col: number, num: number): boolean {
	// Check if we find the same num 
	// in the similar row, we
	// return false
	for (let x = 0; x < N; x++)
		if (grid[row][x] === num)
			return false;

	// Check if we find the same num in 
	// the similar column, we
	// return false
	for (let x = 0; x < N; x++)
		if (grid[x][col] === num)
			return false;

	// Check if we find the same num in 
	// the particular 3*3 matrix,
	// we return false
	const startRow = row - (row % 3);
	const startCol = col - (col % 3);

	for (let i = 0; i < 3; i++)
		for (let j = 0; j < 3; j++)
			if (grid[i + startRow][j + startCol] === num)
				return false;

	return true;
}

/* Takes a partially filled-in grid and attempts
to assign values to all unassigned locations in
such a way to meet the requirements for
Sudoku solution (non-duplication across rows,
columns, and boxes) */
function solveSudoku(grid: number[][], row: number, col: number): boolean {
	// Check if we have reached the 8th 
	// row and 9th column (0
	// indexed matrix), we are 
	// returning true to avoid
	// further backtracking
	if (row === N - 1 && col === N)
		return true;

	// Check if column value becomes 9, 
	// we move to next row and
	// column start from 0
	if (col === N) {
		row++;
		col = 0;
	}

	// Check if the current position of 
	// the grid already contains
	// value >0, we iterate for next column
	if (grid[row][col] > 0)
		return solveSudoku(grid, row, col + 1);

	for (let num = 1; num <= N; num++) {
		// Check if it is safe to place 
		// the num (1-9) in the
		// given row, col -> we 
		// move to next column
		if (isLegal(grid, row, col, num)) {
			/* Assigning the num in 
			the current (row, col)
			position of the grid
			and assuming our assigned 
			num in the position
			is correct */
			grid[row][col] = num;

			// Checking for next possibility with next
			// column
			if (solveSudoku(grid, row, col + 1))
				return true;
		}

		// Removing the assigned num, 
		// since our assumption
		// was wrong, and we go for 
		// next assumption with
		// diff num value
        //once we have tried all the numbers and none of them work, we backtrack
		grid[row][col] = 0;
	}
	return false;
}

function setGrid(num: number){
    grid = chooseBoard(num) as number[][];
}

function main() {
	// 0 means unassigned cells
    const startTime = performance.now();
	if (solveSudoku(grid, 0, 0)){
        grid = grid;
        
    }else{
        console.log("no solution exists");
    }
    const endTime = performance.now();
    const elapsedTime = endTime - startTime;

    console.log(`Execution time: ${elapsedTime} milliseconds`);
}




</script>

<section class="w-full h-screen">
    <div class="p-4 flex justify-center items-center flex-col">
        <h1 class="text-3xl font-semibold">Analysis of Algorithms - Soduku Solver</h1>
        <p>Done by: <strong class="pl-1">Elliot Morrison</strong></p>
    </div>
    <section class="w-full p-3 flex justify-center items-center flex-col"> 
        <div class="grid grid-cols-9 gap-1 w-fit relative">
            {#each grid as row, i}
                {#each row as cell, j}
                    <div class="w-10 h-10 bg-indigo-400 rounded-lg flex justify-center items-center font-bold text-2xl">
                        {cell === 0 ? "" : cell}
                    </div>
                {/each}
            {/each}
            <div class="rounded h-0.5 bg-gray-800 w-full absolute top-1/3 -translate-y-0.5"></div>
            <div class="rounded h-0.5 bg-gray-800 w-full absolute top-2/3"></div>

            <div class="rounded w-0.5 bg-gray-800 h-full absolute left-1/3 -translate-x-0.5"></div>
            <div class="rounded w-0.5 bg-gray-800 h-full absolute left-2/3 "></div>
        </div>
        <div class="flex w-full max-w-sm items-end justify-between">
            <div>
                <h2 class="text font-semibold">Choose Board</h2>
                <select bind:value={choice} class="bg-gray-800 text-white p-2 rounded-lg h-fit" on:change={()=>{setGrid(choice)}}>
                    <option value="0">AL_ESCARGOT</option>
                    <option value="1">MONSTER</option>
                    <option value="2">MEDIUM2</option>
                    <option value="3">MEDIUM</option>
                    <option value="4">EASY</option>
                    <option value="5">EASY2</option>
                </select>
            </div>
            

            <button class="bg-green-700 hover:bg-green-500 text-white h-fit p-2 rounded-lg" on:click={() => main()}>Solve Board</button>
        </div>
    </section>
</section>
