// Com function, tem return
// Com arrow (=>), não tem return
let precosUSD = [10, 25.50, 8, 100, 35.25]
let real = precosUSD.map(num => num * 5)
real.forEach(valor => console.log(valor.toFixed(2)))
// .toFixed --> Duas casas decimais