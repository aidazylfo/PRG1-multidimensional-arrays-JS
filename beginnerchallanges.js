//Can you total the contents of a 2D array? yes total is 45

const array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let total = 0;

for (let i = 0; i < array2D.length; i++) { // Iterate through each element in the row
    for (let j = 0; j < array2D[i].length; j++) {
        total += array2D[i][j]; // Add the element to the total
    }
}
console.log("Total:", total);


