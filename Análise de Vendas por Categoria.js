let vendas = [
    { produto: "Notebook", categoria: "Informática", valor: 3500, quantidade: 2 },
    { produto: "Mouse", categoria: "Informática", valor: 80, quantidade: 5 },
    { produto: "Camiseta", categoria: "Moda", valor: 50, quantidade: 10 },
    { produto: "Tênis", categoria: "Moda", valor: 250, quantidade: 4 },
    { produto: "Livro", categoria: "Educação", valor: 40, quantidade: 7 },
    { produto: "Tablet", categoria: "Informática", valor: 1500, quantidade: 1 }
];
let totaisPorCategoria = {};
vendas.forEach((objeto) => {
    let totalItem = objeto.valor * objeto.quantidade;
    if (!totaisPorCategoria[objeto.categoria]) {
        totaisPorCategoria[objeto.categoria] = 0;
    }
    totaisPorCategoria[objeto.categoria] += totalItem;
});
console.log("Totais de vendas por categoria:");
for (let categoria in totaisPorCategoria) {
    console.log(`${categoria}: R$ ${totaisPorCategoria[categoria].toFixed(2)}`);
}
let categoriaCampea = "";
let maiorTotal = 0;
for (let categoria in totaisPorCategoria) {
    if (totaisPorCategoria[categoria] > maiorTotal) {
        maiorTotal = totaisPorCategoria[categoria];
        categoriaCampea = categoria;
    }
}
console.log(`Categoria campeã de vendas: ${categoriaCampea}`);
console.log(`Total de vendas: R$ ${maiorTotal.toFixed(2)}`);