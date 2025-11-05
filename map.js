let precosUSD = [10, 25.50, 8, 100, 35.25];
let real = precosUSD.map(function(num) {
    return num * 5;
});
real.forEach(valor => {
    console.log(valor.toFixed(2));
});