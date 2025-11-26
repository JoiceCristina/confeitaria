//Vamos criar os elementos
//do html om javascript
//dinamicamente

function criarItemCardapio(titulo, descricao, foto) {
    const divItemCArdapio = document.createElement('div')
    divItemCArdapio.className = 'item-carpadio'

    const h3Titulo = document.createElement('h3')
    h3Titulo.textContent = titulo

    const pDescricao = document.createElement('p')
    pDescricao.textContent = pDescricao
    pDescricao.className = 'desricao'

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
    'Bolo de Chocolate', 'Um clássico irresistível com camadas de chocolate', 'https://www.comidaereceitas.com.br/img/sizeswp/1200x675/2020/05/bolo_chocolate_leite.jpg'
)
