import { playerModal } from "./playerModal.js"

class ModalProvider {

    list = []; 

    id = 0;

    $container = document.querySelector('.modal-container');

    constructor() {
        
    }

    modals = {
        modal1: playerModal
    }

    addModal(type, props) {
        const {list, modals, $container} = this;
        const modalId = ++this.id; 
        
        const $modal = modals[type](props); // html модальника
        
        const modalData = {$modal, modalId, props, type, close: () => this.closeModal(modalId)};
        
        list.push(modalData);
        $container.appendChild($modal);
    }
    
    closeModal() {
        const {list} = this;

        const necessaryModal = list.find(({modalId}) => modalId === id);
        const necessaryModalIndex = list.indexOf(necessaryModal);
        necessaryModal.$modal.remove();
        list.splice(necessaryModalIndex, 1);
    };

    closeAll() {};
        
}
 
export const modalProvider = new ModalProvider() 