let alunos = [
    {nome: "Ana", idade: 20, curso: "ES"},
    {nome: "Carlos", idade: 22, curso: "Engenharia"},
    {nome: "Beatriz", idade: 19, curso: "Medicina"}
];
function listarNomes(alunos) {
    for (let i = 0; i < alunos.length; i++) {
        console.log(alunos[i].nome)
    }
}
function aumentarIdade(alunos) {
    for (let aluno of alunos) { // Perde o índice
        aluno.idade += 1       // Ganha sintaxe = mais claro
        console.log(aluno.idade)
    }
}
let opcao = prompt("1 - Listar | 2 - Atualizar idade");
switch(opcao) {
  case "1": listarNomes(alunos); break;
  case "2": aumentarIdade(alunos); break;
  default: alert("Opção inválida");
}