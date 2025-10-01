function receberAlunos (nomes) {
    for (let i = 0; i < 5; i++) {
        console.log(nomes[i])
    }
}

function main () {
    let a = [];
    let b = [];
    for (let i = 0; i < 5; i++) {
        a[i] = prompt(`Insira o nome do aluno ${i+1}: `).toUpperCase();
        b[i] = a[i]
    }
        receberAlunos(a)
        for (let i = 0; i < 5; i++) {
            console.log(`O vetor original é: ${b[i]}`)
        }
}
main()