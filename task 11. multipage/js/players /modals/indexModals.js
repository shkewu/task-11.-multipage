import { modalProvider } from "./modalProviderMy.js"

const addModalBtn = document.querySelector('.add-modal')
const closeModalBtn = document.querySelector('.close-modal')

addModalBtn.addEventListener('click', () => {
    modalProvider.addModal('playerModal', {
        name: 'Player name',
        description: 'Some description',
        imgSrc: 'https://via.placeholder.com/150',
    })
}); 

closeModalBtn.addEventListener('click', () => {
    modalProvider.closeModal()
});