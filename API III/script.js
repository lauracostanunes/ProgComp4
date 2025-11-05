async function buscarPosts() {
    try {
        const qntPosts = Number(document.getElementById("qntPosts").value)
        const resposta = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${qntPosts}`)
        const dados = await resposta.json()
        const exibir = document.getElementById("postagens")
        exibir.innerText = ""
        for(let i = 0; i < dados.length; i++){
            const div = document.createElement("div")
            const h2 = document.createElement("h2")
            const h3 = document.createElement("h3")
            const p = document.createElement("p")
            h2.textContent = `Postagem nº${i+1}`
            h3.textContent = `Título: ${dados[i].title}`
            p.textContent = `Conteúdo: ${dados[i].body}`
            div.append(h2,h3,p); div.className = "posts"
            exibir.appendChild(div)
        }
    } catch (erro){
        console.log(`Erro: ${erro}`)
        alert("Não foi possível encontrar.")
    }
}