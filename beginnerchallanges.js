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


// Can you calculate the average of a 2D array? yes average is 10

let count = 0;

for (let i = 0; i < array2D.length; i++) { // Iterate through each element in the row
    for (let j = 0; j < array2D[i].length; j++) {
        total += array2D[i][j]; // Add the element to the total
        count++; // Increment the count of elements
    }
}

const average = total / count;
console.log("Average:", average);


// Can you calculate the maximum value stored within a 2D array? yes maxiumum value is 9 

let max = array2D[0][0]; // Initialize max with the first element

// Iterate through each row
for (let i = 0; i < array2D.length; i++) { // Iterate through each element in the row
    for (let j = 0; j < array2D[i].length; j++) {
        if (array2D[i][j] > max) {
            max = array2D[i][j]; // Update max if current element is larger
        }
    }
}

console.log("Maximum Value:", max);

// Can you calculate the minimum value stored in a 2D array? yes minimum value is 1

let min = array2D[0][0]; // Initialize min with the first element

// Iterate through each row
for (let i = 0; i < array2D.length; i++) {
    // Iterate through each element in the row
    for (let j = 0; j < array2D[i].length; j++) {
        if (array2D[i][j] < min) {
            min = array2D[i][j]; // Update min if the current element is smaller
        }
    }
}

console.log("Minimum Value:", min);