import React from "react";

export type CardType = {
    readonly id: string;
    readonly deckId: string;
    front: string;
    back: string;
    lastRevision?: Date;
    numberOfRevisions?: number;
    revisionStatus?: "UP_TO_DATE" | "OVERDUE"
    createdAt?: string;
    tag?: string;
    deckName: string;
}

export type Deck = {
    readonly id: string;
    name: string;
    category: string;
    cards?: CardType[];
    totalCards?: number;
    overdueCards?: number;
    createdAt?: string;
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

export type CardData = {
    deckId: string;
    front: string;
    back: string;
    deckName: string;
    tag?: string;
}

export type RevisionRequestDataType = {
    revisedCards: string[];
    deckId: string;
}
