//Vamos criar os elementos
//do html om javascript
//dinamicamente

function criarItemCardapio(titulo, descricao, foto) {
    const divItemCArdapio = document.createElement('div')
    divItemCArdapio.className = 'item-carpadio'

    const h3Titulo = document.createElement('h3')
    h3Titulo.textContent = titulo

    const pDescricao = document.createElement('p')
    pDescricao.textContent = descricao
    pDescricao.className = 'descricao'

    const img = document.createElement('img')
    img.src = foto
    img.className = 'img-item'

    //adicionando os elementos na div mãe
    const divC = document.getElementById('cardapio')

    divItemCArdapio.appendChild(h3Titulo)
    divItemCArdapio.appendChild(pDescricao)
    divItemCArdapio.appendChild(img)

    divC.appendChild(divItemCArdapio)
}
//executando a função
criarItemCardapio(
    'Bolo de Chocolate', 
    'Um clássico irresistível com camadas de chocolate', 
    'https://www.comidaereceitas.com.br/img/sizeswp/1200x675/2020/05/bolo_chocolate_leite.jpg'
)

function buscarBolos() {
    const url = 'https://dashboard.render.com/static/srv-d45t3oc9c44c73cb03og'; // Substitua com a URL real

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro na requisição: ' + response.statusText);
            }
            return response.json(); // Converte a resposta para JSON
        })
        .then(dados => {
            console.log('Lista de bolos:', dados); // Exibe os dados no console
        })
        .catch(error => {
            console.error('Erro ao fazer a requisição:', error); // Trata erros
        });
}

// Chamada da função para buscar os bolos
buscarBolos();