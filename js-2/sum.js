function sum(num) {
    return num.reduce((total,number) =>total + number,0);
}

// escribe la función sum acá

console.log(sum([1, 2, 3])) // 6
console.log(sum([10, 8, 12, 5])) // 35
console.log(sum([])) // 0