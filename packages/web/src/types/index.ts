export type Deck = {
    id: string;
    name: string;
    category: string;
}

export type Card = {
    readonly id: string;

    readonly deckId: string;

    description: string;

    answer: string;

    lastRevision?: Date;

    numberOfRevisions?: number;

    revisionStatus?: "UP_TO_DATE" | "OVERDUE"

    createdAt?: Date;

    updatedAt?: Date;
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

export type DeckFormProps = {
    onCloseModal: () => void;
}
