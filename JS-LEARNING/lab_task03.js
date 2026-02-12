function min(...params) {
    var min = params[0];
    for (let index = 0; index < params.length; index++) {
        if (min > params[index]) {
            min = params[index]
        }
    }
    return min;
}
function max(...params) {
    var max = params[0];
    for (let index = 0; index < params.length; index++) {
        if (max < params[index]) {
            max = params[index]
        }
    }
    return max;
}
console.log(max(4, 8, 1, 3)); 