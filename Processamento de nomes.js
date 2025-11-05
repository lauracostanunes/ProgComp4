function carregarCidades(lista) {
    return ["São Paulo", "Campinas", "Santos", "Sorocaba", "Caraguatatuba"]
}
function padronizarNomes(lista) {
    for (let i = 0; i < lista.length; i++) {
        lista[i] = lista[i].toUpperCase();
    }
}
function marcarInterior(lista) {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i][0] == 'C') {
            lista[i] = `INTERIOR - ${lista[i]}`
        }
    }
}
function exibirCidades(lista) {
    console.log(lista)
}
function main () {
    let nomes = carregarCidades();
    console.log(nomes)
    padronizarNomes(nomes)
    console.log(nomes)
    marcarInterior(nomes)
    exibirCidades(nomes)
}
main ()