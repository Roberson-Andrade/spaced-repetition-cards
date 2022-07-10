export type Deck = {
    id: string;
    name: string;
    category: string;
}

export type ModalProps = {
    title: string;
    description: string;
    confirmButtonText: string;
    cancelButtonText: string;
    closeModal: () => void;
    onConfirm: () => void;
    onCancel?: () => void;
}
