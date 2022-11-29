//Array de objetos contendo os produtos do carrinho
let produtosCarrinho = [
    {
        id: 1,
        img: '/assets//images/products/produto-1.png',
        nome: 'Pefume Kaiak',
        preço: 100
    },
    {
        id: 2,
        img: '/assets//images/products/produto-2.png',
        nome: 'Pefume Humor',
        preço: 80
    },
    {
        id: 3,
        img: '/assets//images/products/produto-3.png',
        nome: 'Hidratante',
        preço: 50
    },
    {
        id: 4,
        img: '/assets//images/products/produto-4.png',
        nome: 'Sabonetes',
        preço: 150
    },
    {
        id: 5,
        img: '/assets//images/products/produto-5.png',
        nome: 'Shampoo',
        preço: 70
    },
    {
        id: 6,
        img: '/assets//images/products/produto-6.png',
        nome: 'Sabonete Liquido',
        preço: 300
    }
]

let modalQuantidade = 1

//Adicionando os produtos na area do carrinho
const q = (el) => document.querySelector(el) //retorna o item
const all = (el) => document.querySelectorAl(el) //retorna um array com todos os itens

produtosCarrinho.map((item, index) => {
    let produtoItem = q('#produtos-teste #container-produtos').cloneNode(true)

    //Inserindo o index do array como a chave do produto
    produtoItem.setAttribute('data-key', index)
    //Preenchendo a tela do carrinho com os produtos
    produtoItem.querySelector('.img-produto').src = item.img
    produtoItem.querySelector('.nome-produto').innerHTML = item.nome
    produtoItem.querySelector('.preco-produto').innerHTML = `R$ ${item.preço.toFixed(2)} `

    //Pegando o index do produto que foi clicado, para colocar no modal
    produtoItem.querySelector('.button-addcarinho').addEventListener('click', (e) => {
        let key = e.target.closest('#container-produtos').getAttribute('data-key')
        modalQuantidade = 1

        //Preenchendo o modal com as informações do produto que foi clicado
        q('#header-modalAdicionarItem p').innerHTML = produtosCarrinho[key].nome
        q('#header-modalAdicionarItem #preco').innerHTML = `R$ ${produtosCarrinho[key].preço.toFixed(2)}`
        q('#body-modalAdicionarItem img').src = produtosCarrinho[key].img
        q('#body-modalAdicionarItem p').innerHTML = `R$ ${produtosCarrinho[key].preço.toFixed(2)}`

        q('#quantidade-produto').innerHTML = modalQuantidade

        //Diminuir quantidade dos produtos
        q('#quantidade-menos').addEventListener('click', () => {
            
            if (modalQuantidade > 1) {
                modalQuantidade--
            }

            q('#quantidade-produto').innerHTML = modalQuantidade //Colocando na tela a quantidade atualizada
           
            // let precoFinal = 

            // q('#body-modalAdicionarItem p').innerHTML = `R$ ${precoFinal.toFixed(2)}`
        })

        //Aumentar quantidade dos produtos
        q('#quantidade-mais').addEventListener('click', () => {
            modalQuantidade++ //Incrementando 1 na quantidade, sempre que o usuario clica no +
            //Colocando na tela a quantidade atualizada
            q('#quantidade-produto').innerHTML = modalQuantidade

            //Calculando o novo preço, a partir da quantidades de itens
            let novoPreco = (produtosCarrinho[key].preço * modalQuantidade)

            //Substituindo em tela o preço antigo pelo preço novo 
            q('#body-modalAdicionarItem p').innerHTML = `R$ ${novoPreco.toFixed(2)}`
        })
    })

    document.querySelector('.produto-area').append(produtoItem)
})

//Eventos de abrir e fechar o modal, assim como o de fechar o modal clicando no fade
const fade = document.querySelector('#fade')
const modal = document.querySelector('#modalAdicionarItem')
const buttonFecharModal = document.querySelector('#modalAdicionarItem')


function adicionarAoCarrinho() {
    modal.classList.toggle('hide')
    fade.classList.toggle('hide')

}

fade.addEventListener("click", () => {
    buttonFecharModal.classList.toggle('hide')
    fade.classList.toggle('hide')
})

function fecharModal() {
    buttonFecharModal.classList.toggle('hide')
    fade.classList.toggle('hide')
}



