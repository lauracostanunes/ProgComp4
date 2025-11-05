let vendas = [
    { produto: "Notebook", categoria: "Informática", valor: 3500, quantidade: 2 },
    { produto: "Mouse", categoria: "Informática", valor: 80, quantidade: 5 },
    { produto: "Camiseta", categoria: "Moda", valor: 50, quantidade: 10 },
    { produto: "Tênis", categoria: "Moda", valor: 250, quantidade: 4 },
    { produto: "Livro", categoria: "Educação", valor: 40, quantidade: 7 },
    { produto: "Tablet", categoria: "Informática", valor: 1500, quantidade: 1 }
];
let vendasInformatica = 0, vendasModa = 0, vendasEducacao = 0
let maiorVenda = 0, categoriaCampea = 0
vendas.forEach((elemento) => {
    if(elemento.categoria == "Informática"){
        vendasInformatica+= elemento.valor*elemento.quantidade
    } else if(elemento.categoria == "Moda"){
        vendasModa+= elemento.valor*elemento.quantidade
    } else if(elemento.categoria == "Educação"){
        vendasEducacao+= elemento.valor*elemento.quantidade
    }

    if(vendasEducacao > vendasInformatica && vendasEducacao > vendasModa){
        maiorVenda = vendasEducacao, categoriaCampea = "Educação"
    } else if(vendasInformatica > vendasEducacao && vendasInformatica > vendasModa){
        maiorVenda = vendasInformatica, categoriaCampea = "Informática"
    } else{
        maiorVenda = vendasModa, categoriaCampea = "Moda"   
    }
})
console.log(`Vendas Informática: ${vendasInformatica}`)
console.log(`Vendas Educação: ${vendasEducacao}`)
console.log(`Vendas Moda: ${vendasModa}`)
console.log(`Categoria mais vendas: ${categoriaCampea}\nTotal vendas: ${maiorVenda}`)