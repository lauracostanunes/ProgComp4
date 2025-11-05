function alterarNumero(x) {
    x += 100
}
function alterarVetor(v) {
    v[0] = 100 // Altera variável vetor do main()
}
function main() {
    let valor = 10, vetor = [10, 20, 30]
    alterarNumero(valor)
    console.log(`Valor: ${valor}`)
    // Passagem de parâmetros por referência
    alterarVetor(vetor)
    console.log(`Vetor: ${vetor}`)
}
main()