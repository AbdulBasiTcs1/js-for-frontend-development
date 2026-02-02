function multiSum(z, x, y) {
    var sum = 0;
    for (let index = 2; index < z; index++) {
        if (index % x == 0 || index % y == 0) {
            sum += index;
        };
    };
    return sum;
};
console.log(multiSum(10, 3, 5)); 