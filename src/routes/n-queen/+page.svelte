<script lang="ts">

    import { solveNQueens } from "./N-Queen";
    

    let nChoice = 0;


    let posibleBoardLayout: string[][][] = []


    function solveNQueensHandler(n: number){
        let solutions = solveNQueens(n);
        // console.log(solutions);
        
        solutions.forEach((solution)=>{
            let board: string[][] = []
            
            solution.forEach((row)=>{
                board.push(row.split(''))
            })
        
            

            posibleBoardLayout.push(board)
            posibleBoardLayout = [...posibleBoardLayout]

        })
        
    }

</script>


<section class="w-full h-screen">
    <div class="p-4 flex justify-center items-center flex-col">
        <h1 class="text-3xl font-semibold">Analysis of Algorithms - N-Queens</h1>
        <p>Done by: <strong class="pl-1">Matthew Cole</strong></p>
    </div>
    <section class="w-full p-3 flex justify-center items-center flex-col space-y-4"> 
        {#each posibleBoardLayout as board }
            <div class="grid grid-cols-{nChoice} gap-1 w-fit relative">
                {#each board as row, i}
                    {#each row as cell, j}
                        <div class="w-10 h-10 bg-indigo-400 rounded-lg flex justify-center items-center font-bold text-2xl">
                            {cell === "." ? "" : cell}
                        </div>
                    {/each}
                {/each}
                <!-- <div class="rounded h-0.5 bg-gray-800 w-full absolute top-1/3 -translate-y-0.5"></div>
                <div class="rounded h-0.5 bg-gray-800 w-full absolute top-2/3"></div>

                <div class="rounded w-0.5 bg-gray-800 h-full absolute left-1/3 -translate-x-0.5"></div>
                <div class="rounded w-0.5 bg-gray-800 h-full absolute left-2/3 "></div> -->
            </div>
        {/each}
        
        <div class="flex w-full max-w-sm items-end justify-between">
            <div>
                <h2 class="text font-semibold">Enter Value For N</h2>
                <input bind:value={nChoice} type="number" class="bg-gray-800 text-white p-2 rounded-lg h-fit" >
                 
            </div>
            

            <button class="bg-green-700 hover:bg-green-500 text-white h-fit p-2 rounded-lg" on:click={()=>{solveNQueensHandler(nChoice)}}>Solve N Queens <br> for Board of {nChoice} x {nChoice} </button>
        </div>
    </section>
</section>
