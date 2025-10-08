function cadastroInicial(funcionarios) {
    funcionarios.push(
        { nome: "Ana", cargo: "Recursos humanos", salario: 2500 },
        { nome: "Carlos", cargo: "Estagiário", salario: 1100 },
        { nome: "Laura", cargo: "Gerente", salario: 10000 }
    );
}
function listarNomes(funcionarios) {
    console.log(`\n--- LISTA DE FUNCIONÁRIOS ---`);
    for (let funcionario of funcionarios) {
        console.log(`Nome: ${funcionario.nome}, Cargo: ${funcionario.cargo}, Salário: R$${funcionario.salario}`);
    }
}
function aumentarSalario(funcionarios) {
    for (let funcionario of funcionarios) {
        funcionario.salario *= 1.1;
    }
    alert(`Salários aumentados em 10%`);
}
function cadastrarNovo(funcionarios) {
    funcionarios.push({
        nome: prompt(`Informe o nome do funcionário: `),
        cargo: prompt(`Informe o cargo do funcionário: `),
        salario: Number(prompt(`Informe o salário do funcionário: `))
    });
    alert(`Funcionário cadastrado com sucesso!`);
}
function buscarSalario(funcionarios, nome) {
    for (let funcionario of funcionarios) {
        if (funcionario.nome.toLowerCase() === nome.toLowerCase()) {
            alert(`Salário de ${funcionario.nome}: R$${funcionario.salario}`);
            return;
        }
    }
    alert(`Funcionário não encontrado!`);
}
function atualizarCargo(funcionarios, nome, novoCargo) {
    for (let funcionario of funcionarios) {
        if (funcionario.nome.toLowerCase() === nome.toLowerCase()) {
            let salarioAntigo = funcionario.salario;
            funcionario.cargo = novoCargo;
            let novoSalario = Number(prompt(`Informe o novo salário para o cargo ${novoCargo}: `, funcionario.salario));
            funcionario.salario = novoSalario;
            alert(`Cargo e salário atualizados com sucesso!`);
            return;
        }
    }
    alert(`Funcionário não encontrado!`);
}
function removerFuncionario(funcionarios, nome) {
    for (let i = 0; i < funcionarios.length; i++) {
        if (funcionarios[i].nome.toLowerCase() === nome.toLowerCase()) {
            funcionarios.splice(i, 1);
            alert(`Funcionário removido com sucesso!`);
            return;
        }
    }
    alert(`Funcionário não encontrado!`);
}
function calcularMediaSalarial(funcionarios) {
    if (funcionarios.length === 0) return 0;   
    let total = funcionarios.reduce((acc, func) => acc + func.salario, 0);
    return total / funcionarios.length;
}
function main() {
    let funcionarios = [];
    cadastroInicial(funcionarios);
    let opcao;
    do {
        opcao = Number(prompt(
            `SISTEMA DE GERENCIAMENTO\n
1 - Cadastrar funcionário\n
2 - Listar funcionários\n
3 - Aumentar salários em 10%\n
4 - Buscar salário por nome\n
5 - Atualizar cargo\n
6 - Remover funcionário\n
7 - Média salarial da empresa\n
8 - Sair`
        ));
        switch(opcao) {
            case 1:
                cadastrarNovo(funcionarios);
                break;
            case 2:
                listarNomes(funcionarios);
                break;
            case 3:
                aumentarSalario(funcionarios);
                break;
            case 4:
                let nomeBusca = prompt(`Informe o nome para busca: `);
                buscarSalario(funcionarios, nomeBusca);
                break;
            case 5:
                let nomeAtualizar = prompt(`Informe o nome do funcionário: `);
                let novoCargo = prompt(`Informe o novo cargo: `);
                atualizarCargo(funcionarios, nomeAtualizar, novoCargo);
                break;
            case 6:
                let nomeRemover = prompt(`Informe o nome para remover: `);
                removerFuncionario(funcionarios, nomeRemover);
                break;
            case 7:
                let media = calcularMediaSalarial(funcionarios);
                alert(`Média salarial: R$${media.toFixed(2)}`);
                break;
            case 8:
                alert(`Programa encerrado!`);
                break;
            default:
                alert(`Opção inválida!`);
        }
    } while (opcao !== 8);
}
main();