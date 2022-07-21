import React, { useState } from "react";
import { GiPartyPopper } from "react-icons/gi";
import Button from "../../components/Button";
import { useConfirmModal } from "../../hooks/useConfirmModal";
import { useStore } from "../../store";
import { CardType } from "../../types";
import RevisionDeck from "./components/RevisionDeck";
import RevisionDisplay from "./components/RevisionDisplay";

function Revision() {
  const [deckUnderRevision, setDeckUnderRevision] = useState<number | null>(null);
  const [modal, createModal] = useConfirmModal();
  const decks = useStore((state) => state.decks);

  const deckUnderRevisionHandler = (
    _: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    index: number
  ) => {
    setDeckUnderRevision(index);
  };

  const stopRevisionHandler = () => {
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
          <>
            <RevisionDisplay
              items={decks[deckUnderRevision].cards as CardType[]}
              stopRevision={stopRevisionHandler}
            />
            <Button className="2sm:mt-2" onClick={stopRevisionHandler}>Parar revisão</Button>
          </>
          )}

        </div>
      </div>
      {modal}
    </>
  );
}

export default Revision;
