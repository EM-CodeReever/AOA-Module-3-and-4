export function solveNQueens(n: number): string[][] {
    // Sets to track the columns and diagonals that are under attack by any queen
    let column = new Set<number>();
    let positiveDiagonal = new Set<number>(); // Tracks attacks on positive diagonals (row + col)
    let negativeDiagonal = new Set<number>(); // Tracks attacks on negative diagonals (row - col)

    // Result array to store all of the board configurations that solve the problem
    let res: string[][] = [];
    // Initialize the board with all cells set to '.', representing an empty cell
    let board: string[][] = Array.from({length: n}, () => Array(n). fill('.'));

    // Helper function to place queens on the board
    function backtrack(row: number){
        // Base case: if all rows are filled, the current board configuration is a solution
        if(row === n){
            // Convert each row of the board to a single string and add it to the results array
            res.push(board.map(row => row.join('')));
            return;
        }

        // Try placing a queen in each column of the current row
        for(let col = 0; col < n; col++){
            // Check if the column or the diagonals are already under attack
            if(column.has(col) || positiveDiagonal.has(row + col) || negativeDiagonal.has(row - col)) continue;

            // Place a queen and mark the column and diagonals the current Queen is/can attacking
            column.add(col);
            positiveDiagonal.add(row + col);
            negativeDiagonal.add(row - col);
            board[row][col] = 'Q';

            // Recurse to place a queen in the next row
            backtrack(row + 1);

            // Backtrack: remove the queen and unmark the attacks
            column.delete(col);
            positiveDiagonal.delete(row + col);
            negativeDiagonal.delete(row - col);
            board[row][col] = '.';
        }
    }

    // Start the backtracking from the first row
    backtrack(0);
    return res; // Return all the solutions found
}
