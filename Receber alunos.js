function leitura (vet) {
    return ["Ana", "Beatriz", "Carlos", "Daniel", "Elena"]
}
function maiusculas (vet) {
    for (let i = 0; i < vet.length; i++) {
        vet[i] = vet[i].toUpperCase();
    }
}
function substituir (vet) {
    for (let i = 0; i < vet.length; i++) {
        if (vet[i][0] == 'A') {
            vet[i] = `ANÔNIMO`
        }
    }
}
function exibir (vet) {
    console.log(vet)
}
function main () {
    let nomes = leitura();
    console.log(nomes)
    maiusculas(nomes)
    console.log(nomes)
    substituir(nomes)
    exibir(nomes)
}
main ()