async function start() {
    const filmes2025 = ['One Battle After Another', 'Sinners', 'Hamnet',
        'Sentimental Value', 'Bugonia', 'Thunderbolts', 'No Other Choice', 'Together',
        'Weapons', 'F1', 'Mickey 17', 'Materialists']
    const apikey = '&apikey=82281742'
    try {
        const mural = document.getElementById("filmes2025")
        mural.innerText = ""
        for (let n of filmes2025) {
            const tituloRequest = n.split(" ").join("+")
            const resposta = await fetch(`http://www.omdbapi.com/?t=${tituloRequest}${apikey}`)
            const dados = await resposta.json()
            const titulo = dados.Title
            const linkPoster = dados.Poster
            const div = document.createElement("div")
            const p = document.createElement("p")
            const img = document.createElement("img")
            img.src = linkPoster; p.textContent = titulo
            div.append(img, p); div.className = "posterFilme"
            mural.appendChild(div)
        }
    } catch (erro) {
        console.log(`Erro: ${erro}`)
        alert("Não foi possível encontrar.")
    }
}
start()
async function pesquisar() {
    const apikey = '&apikey=82281742'
    const tituloContainer = document.getElementById("tituloContainer")
    const input = document.getElementById("inDados").value
    const container = document.getElementById("filmes2025")
    if (input != "") {
        let isNumber = 4
        for (let i = (input.length - 1); i > input.length - 5; i--) {
            if (isNaN(Number(input[i]))) {
                isNumber--
            }
        }
        let linkRequest
        if (isNumber == 4) {
            const title = input.slice(0, -4).trim().split(" ").join("+")
            const ano = input.slice(-4)
            linkRequest = `http://www.omdbapi.com/?t=${title}&y=${ano}${apikey}`
        } else {
            const title = input.trim().split(" ").join("+")
            linkRequest = `http://www.omdbapi.com/?t=${title}${apikey}`
        }
        try {
            const resposta = await fetch(linkRequest)
            const dados = await resposta.json()
            if (dados.Response != "False") {
                tituloContainer.textContent = "Resultado da pesquisa..."
                container.innerText = ""
                const cardFilme = document.createElement("div"); cardFilme.className = "cardFilme"
                const divPoster = document.createElement("div"); divPoster.className = "divPoster"
                const divInfos = document.createElement("div"); divInfos.className = "divInfos"
                const poster = document.createElement("img"); poster.src = dados.Poster
                const titulo = document.createElement("h3"); titulo.textContent = `Título: ${dados.Title}`
                const genero = document.createElement("p"); genero.textContent = `Gênero: ${dados.Genre}`
                const diretor = document.createElement("p"); diretor.textContent = `Diretor: ${dados.Director}`
                const sinopse = document.createElement("p"); sinopse.textContent = `Enredo: ${dados.Plot}`
                const dataLancamento = document.createElement("p"); dataLancamento.textContent = `Data de Lançamento: ${dados.Released}`
                const duracao = document.createElement("p"); duracao.textContent = `Duração: ${dados.Runtime}`
                divPoster.append(poster)
                divInfos.appendChild(titulo); divInfos.appendChild(genero); divInfos.appendChild(diretor);
                divInfos.appendChild(sinopse); divInfos.appendChild(duracao); divInfos.appendChild(dataLancamento)
                cardFilme.append(divPoster); cardFilme.append(divInfos)
                container.appendChild(cardFilme)
            } else {
                tituloContainer.textContent = "Filme não encontrado"
                container.innerText = ""
            }
        } catch (erro) {
            alert("Erro")
            console.log(`Erro: ${erro}`)
        }
    }
}