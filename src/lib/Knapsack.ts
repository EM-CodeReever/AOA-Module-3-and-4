
function knapsack(capacity: number, weights: number[], values: number[]){


    if (weights == null || values == null || weights.length != values.length || capacity < 0)
        throw new Error("Invalid input");

    const N = weights.length;

    // Initialize a table where individual rows represent items
    // and columns represent the weight of the knapsack
    const DP: number[][] = Array.from({ length: N + 1 }, () => Array(capacity + 1).fill(0));
    

    for (let i = 1; i <= N; i++) {

        // Get the value and weight of the item
        const w = weights[i - 1], v = values[i - 1];

        for (let sz = 1; sz <= capacity; sz++) {

            // Consider not picking this element
            DP[i][sz] = DP[i - 1][sz];

            // Consider including the current element and
            // see if this would be more profitable
            if (sz >= w && DP[i - 1][sz - w] + v > DP[i][sz]) DP[i][sz] = DP[i - 1][sz - w] + v;
        }
    }

    let sz = capacity;
    const itemsSelected = [];

    // Using the information inside the table we can backtrack and determine
    // which items were selected during the dynamic programming phase. The idea
    // is that if DP[i][sz] != DP[i-1][sz] then the item was selected
    for (let i = N; i > 0; i--) {
        if (DP[i][sz] != DP[i - 1][sz]) {
            const itemIndex = i - 1;
            itemsSelected.push(itemIndex);
            sz -= weights[itemIndex];
        }
    }
    

    return {
        maxValue: DP[N][capacity], //maximum profit - last cell of the table,
        itemsSelected
    };
  
}



let capacity = 10;
let V = [1, 4, 8, 5];
let W = [3, 3, 5, 6];

console.log(knapsack(capacity, W, V)); 


