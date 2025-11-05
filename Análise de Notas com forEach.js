let estudantes = []
for (let i = 0; i < 10; i++) {
    estudantes.push(Number(prompt(`Insira a nota do ${i+1} estudante: `)))
}
let soma = 0
let aprovados = 0
let par = []
estudantes.forEach (function (notas, indice) { 
    soma += notas
    if (notas >= 7) {
        aprovados++
    }
    if (indice%2 == 0) {
        par.push(notas)
    }
})
console.log(estudantes)
console.log(`A soma das notas é: `, soma)
let media = soma/10
console.log(`A média das notas é: `, media)
console.log(`A quantidade de aprovados é: `, aprovados)
console.log(`A notas nas posições pares é: `, par)