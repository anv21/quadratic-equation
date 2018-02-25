module.exports = function solveEquation(equation) {
    const array = equation.split(' ');
    const a = array[0];
    const b = parseInt(array[3] + array[4], 10);
    const c = parseInt(array[7] + array[8], 10);
    const discriminant = Math.sqrt((Math.pow(b, 2) - 4 * a * c));

    const x1 = Math.round((- b - discriminant) / (2 * a));
    const x2 = Math.round((- b + discriminant) / (2 * a));

    return [x1, x2].sort((a, b) => a - b);
};




