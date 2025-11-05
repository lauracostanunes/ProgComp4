async function carregarImagens() {
            try {
                const qntFotos = Number(document.getElementById("qntFotos").value)
                const resposta = await fetch(`https://jsonplaceholder.typicode.com/photos?_limit=${qntFotos}`)
                const dados = await resposta.json()
                const container = document.getElementById("mural")
                container.innerHTML = ""
                for (let i = 0; i < dados.length; i++) {
                    const div = document.createElement("div")
                    const img = document.createElement("img")
                    const h2 = document.createElement("h2")
                    img.src = dados[i].url; h2.textContent = dados[i].title
                    div.append(img,h2)
                    div.classList = "imagens"
                    container.appendChild(div)
                }
            } catch (erro) {
                console.log(`Erro: ${erro}`)
                alert("Não foi possível carregar os dados.")
            }
        }