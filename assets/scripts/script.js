let produtosCarrinho = [
    {
        id: 1,
        img: '/assets//images/products/produto-1.png',
        nome: 'Pefume Kaiak',
        preço: 'R$ ' + '100,00'
    },
    {
        id: 2,
        img: '/assets//images/products/produto-2.png',
        nome: 'Pefume Humor',
        preço: 'R$ ' + '80,00'
    },
    {
        id: 3,
        img: '/assets//images/products/produto-3.png',
        nome: 'Hidratante',
        preço: 'R$ ' + '50,00'
    },
    {
        id: 4,
        img: '/assets//images/products/produto-4.png',
        nome: 'Sabonetes',
        preço: 'R$ ' + '150,00'
    },
    {
        id: 5,
        img: '/assets//images/products/produto-5.png',
        nome: 'Shampoo',
        preço: 'R$ ' + '70,00'
    },
    {
        id: 6,
        img: '/assets//images/products/produto-6.png',
        nome: 'Sabonete Liquido',
        preço: 'R$ ' + '300,00'
    }
]

let image = document.querySelector('.img-produto')
let nome = document.querySelector('.nome-produto')
let preco = document.querySelector('.preco-produto')

produtosCarrinho.forEach(function (item) {
    image.src = item.img
    nome.innerHTML = item.nome
    preco.innerHTML = item.preço
});


// const fade = document.querySelector('#fade')
// const modal = document.querySelector('#modalAdicionarItem')
// const buttonFecharModal = document.querySelector('#modalAdicionarItem')

// function adicionarAoCarrinho() {
//     modal.classList.toggle('hide')
//     fade.classList.toggle('hide')
// }

// fade.addEventListener("click", () => {
//     buttonFecharModal.classList.toggle('hide')
//     fade.classList.toggle('hide')
// })

// function fecharModal() {
//     buttonFecharModal.classList.toggle('hide')
//     fade.classList.toggle('hide')
// }

