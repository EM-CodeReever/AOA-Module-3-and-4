export function solveNQueens(n: number): string[][]{
    let column = new Set<number>();
    let positiveDiagonal = new Set<number>(); // row + col
    let negativeDiagonal = new Set<number>(); // row - col



    let res: string[][] = [];
    let board: string[][] = Array.from({length: n}, () => Array(n).fill('.'));


    function backtrack(row: number){
        if(row === n){
            res.push(board.map(row => row.join('')));
            return;
        }

        for(let col = 0; col < n; col++){
            if(column.has(col) || positiveDiagonal.has(row + col) || negativeDiagonal.has(row - col)) continue;

            column.add(col);
            positiveDiagonal.add(row + col);
            negativeDiagonal.add(row - col);
            board[row][col] = 'Q';

            backtrack(row + 1);

            column.delete(col);
            positiveDiagonal.delete(row + col);
            negativeDiagonal.delete(row - col);
            board[row][col] = '.';
        }
    }

    backtrack(0);
    return res;
}