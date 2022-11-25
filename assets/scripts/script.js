function adicionarAoCarrinho() {
    const modal = document.querySelector('#modalAdicionarItem')
    const fade = document.querySelector('#fade')

    modal.classList.toggle('hide')
    fade.classList.toggle('hide')
}

const fade = document.querySelector('#fade')

fade.addEventListener("click", () => {
    modal.classList.toggle('hide')
    fade.classList.toggle('hide')
})

function fecharModal () {
const buttonFecharModal = document.querySelector('#buttonFecharModal')

buttonFecharModal.classList.toggle('hide')
fade.classList.toggle('hide')


}