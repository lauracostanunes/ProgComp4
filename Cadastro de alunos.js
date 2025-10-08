function cadastroInicial(alunos) {
    alunos.push({nome: "Ana", idade: 20, curso: "ES"}),
    alunos.push({nome: "Carlos", idade: 22, curso: "Engenharia"}),
    alunos.push({nome: "Beatriz", idade: 19, curso: "Medicina"})
}
function listarNomes(alunos) {
    for (let i = 0; i < alunos.length; i++) {
        console.log(`Nome: ${alunos[i].nome}, idade${alunos[i].idade}, curso ${alunos[i].curso}`)
    }
}
function aumentarIdade(alunos) { // Usar in ou off
    for (let aluno of alunos) { // Perde o índice
        aluno.idade += 1       // Ganha sintaxe = mais claro
        console.log(aluno.idade)
    }
}
function cadastrarNovo(alunos) {
    alunos.push({
        nome: prompt(`Informe o nome do aluno: `),
        idade: Number(prompt(`Informe a idade do aluno: `)),
        curso: prompt(`Informe o curso do aluno: `),
    })
}
function removeAluno (alunos, nomeRemove) {
    for (let i = 0; i < alunos.length; i++) // Splice precisa do índice
        if (aluno[i].nome == nome) { // in ou off não serfve
            alunos.splice(i, 1) // Remove do vetor
            alert(`Aluno removido com sucesso`)
            return // Sai da função
        }
        alert(`Aluno não encontrado`)
}
function main() {
    let vetor = []
    cadastroInicial(vetor)
    let opcao
    do {
        opcao = Number(prompt(`1- Cadastrar aluno | 2 - Listar | 3 - Atualizar idade | 4- Remover aluno |5 - Sair`))
        switch(opcao) {
            case 1: cadastrarNovo(vetor); break;
            case 2: listarNomes(vetor); break;
            case 3: aumentarIdade(vetor); break;
            case 4: let nomeRemove = prompt(`Informe o nome a ser removido: `)
                    removeAluno(vetor, nomeRemove); break;
            case 5: alert(`Programa encerrado`); break;
            default: alert("Opção inválida"); break;
          }
    }
    while (opcao != 4);
    console.log(vetor)
}
main()