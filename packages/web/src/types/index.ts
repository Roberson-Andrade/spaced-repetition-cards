import React from "react";

export type Deck = {
    id: string;
    name: string;
    category: string;
    totalCards?: number;
    cardsOverDue?: number;
    createdAt?: string;
}

export type CardType = {
    readonly id: string;
    readonly deckId: string;
    front: string;
    back: string;
    lastRevision?: Date;
    numberOfRevisions?: number;
    revisionStatus?: "UP_TO_DATE" | "OVERDUE"
    createdAt?: string;
    updatedAt?: string;
    tag?: string;
    deckName: string;
}

export type ModalProps = {
    title: string | React.ReactElement<any, string>;
    description: string;
    confirmButtonText: string;
    cancelButtonText?: string;
    closeModal: () => void;
    onConfirm?: () => void;
    onCancel?: () => void;
}

export type DeckFormProps = {
    onCloseModal: () => void;
}
