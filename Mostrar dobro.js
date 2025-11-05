function mostrarDobro(x) {
    console.log(`O dobro do número é: ${x * 2}`)
}
function quadrado(x) {
    return x * x
}
function main () {
    let a = Number(prompt(`Informe o valor desejado: `))
    mostrarDobro(a)
    console.log(`O quadrado do número informado é: ${quadrado(a)}`)
}
main()