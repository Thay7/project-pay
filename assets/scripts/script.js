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