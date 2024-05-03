<script lang="ts">
  let sum = 0;
  let array = '';
  let subsets: any[] = [];
  let message = '';

  function findSubsets() {
    const targetSum = sum;
    const numbers = array.split(',').map(num => parseInt(num.trim()));

    // Reset subsets
    subsets = [];

    // Backtracking algorithm to find subsets
    function backtrack(start: number, path: number[], currSum: number) {
      if (currSum === targetSum) {  //checks if the current sum is equal to the target sum. If they are equal, it means that the current subset sums up to the target sum.
        subsets.push(path.slice());
        return;
      }
      for (let i = start; i < numbers.length; i++) { //This loop will explore all possible combinations of elements to find subsets.
        if (currSum + numbers[i] <= targetSum) { //checks if adding the current number  to the current sum  will not exceed the target sum
          path.push(numbers[i]);
          backtrack(i + 1, path, currSum + numbers[i]); //recursively calls the backtrack function 
          path.pop();
        }
      }
    }

    // Start backtracking
    backtrack(0, [], 0); //initiate the backtracking process from the first element of the numbers array (index 0)

    // If no subsets found, display message
    if (subsets.length === 0) {
      subsets.push(['No subsets found.']);
      message = 'No subsets found.';
    } else {
      const totalSubsets = subsets.length;
      message = `${totalSubsets} subset${totalSubsets !== 1 ? 's' : ''} found with each summing up to ${sum}.`;
    }
  }
</script>



<section class="w-full h-screen">
    <div class="p-4 flex justify-center items-center flex-col">
        <h1 class="text-3xl font-semibold">Analysis of Algorithms - Subset Sum Problem</h1>
        <p>Done by: <strong class="pl-1">Garaine Baker</strong></p>
    </div>

    <section class="w-full p-5 flex justify-center">
        <div class="w-full max-w-md">
          <div>
            <label for="sum" class="block text-lg font-medium text-gray-700"> Enter the sum</label>
            <input type="number" id="sum" bind:value={sum} class="mt-1 w-full border-gray border-2 rounded-md px-3 py-2 text-gray-700 shadow-sm sm:text-sm" />
          </div>
      
          <div class="mt-4">
            <label for="array" class="block text-lg font-medium text-gray-700"> Enter a set of positive integers (comma-separated)</label>
            <input type="text" id="array" bind:value={array} class="mt-1 w-full border-gray border-2 rounded-md px-3 py-2 text-gray-700 shadow-sm sm:text-sm" />
          </div>
      
          <button on:click={findSubsets} class="bg-green-700 hover:bg-green-500 text-white h-fit mt-2 p-2 rounded-lg">Find subsets</button>
      
          <div class="mt-4">
            <h1 class="font-bold">{message}</h1>
            {#each subsets as subset}
              <p>[ {subset.join(', ')} ]</p>
            {/each}
          </div>
        </div>
      </section>
</section>

