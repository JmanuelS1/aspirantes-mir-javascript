function sum(num) {
    if (num<=0) {
        return 0;
    } else {
        return num + sum (num-1)
    }
}

// código de prueba
console.log(sum(4)) // 1 + 2 + 3 + 4 = 10
console.log(sum(10)) // 55
console.log(sum(15)) // 120