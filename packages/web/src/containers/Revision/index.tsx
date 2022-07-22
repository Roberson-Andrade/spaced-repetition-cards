import React, { useState } from "react";
import { GiPartyPopper } from "react-icons/gi";
import { toast } from "react-toastify";
import { defaultToast } from "../../constants/toastify";
import { useConfirmModal } from "../../hooks/useConfirmModal";
import { useStore } from "../../store";
import { CardType, RevisionRequestDataType } from "../../types";
import RevisionDeck from "./components/RevisionDeck";
import RevisionDisplay from "./components/RevisionDisplay";

function Revision() {
  const [deckUnderRevision, setDeckUnderRevision] = useState<number | null>(null);
  const [modal, createModal] = useConfirmModal();
  const decks = useStore((state) => state.decks);
  const updateCardRevision = useStore((state) => state.updateCardRevision);

  const deckUnderRevisionHandler = (
    _: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    index: number
  ) => {
    setDeckUnderRevision(index);
  };

  const stopRevisionHandler = (
    requestData: RevisionRequestDataType,
    allCardsFinished?: boolean
  ) => {
    if (allCardsFinished) {
      createModal({
        title: (
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold">Revisão finalizada</h3>
            <GiPartyPopper size="30px" />
          </div>
        ),
        description: "Parabéns! Você revisou todos os cards deste deck. Crie mais cards e volte para revisá-los!",
        confirmButtonText: "OK"
      });
    }
    if (requestData.revisedCards.length > 0) {
      updateCardRevision(requestData.revisedCards, requestData.deckId, (error) => {
        if (error) {
          toast.error(error || "Erro interno", defaultToast);
          return;
        }

        toast.success("Revisão salva com sucesso!", defaultToast);
      });
    }
    setDeckUnderRevision(null);
  };
  return (
    <>
      <div className="flex-center flex-grow bg-gradient-to-r backdrop-blur-xl from-[#e2e3e4] to-[#acbecd] gap-3 p-5 flex-wrap">
        <div className="flex flex-col h-full w-full items-center flex-grow ">
          {deckUnderRevision === null && (
          <RevisionDeck items={decks} onClick={deckUnderRevisionHandler} />
          )}

          {deckUnderRevision !== null && (
          <RevisionDisplay
            items={decks[deckUnderRevision].cards?.filter((card) => card.revisionStatus === "OVERDUE") as CardType[]}
            stopRevision={stopRevisionHandler}
          />
          )}

        </div>
      </div>
      {modal}
    </>
  );
}

export default Revision;
