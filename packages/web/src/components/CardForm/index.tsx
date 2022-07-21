import { ChangeEvent, FormEvent, useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { useStore } from "../../store";
import Select from "../Select/Index";

type CardFormProps = {
  onCloseModal: () => void;
};

function CardForm({ onCloseModal }: CardFormProps) {
  const [frontValue, setfrontValue] = useState("");
  const [backValue, setbackValue] = useState("");
  const [deckValue, setDeckValue] = useState("");
  const [tagValue, setTagValue] = useState("");
  const decks = useStore((state) => state.decks);
  const createCard = useStore((state) => state.createCard);

  const frontInputHandler = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setfrontValue(target.value);
  };

  const backInputHandler = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setbackValue(target.value);
  };

  const deckInputHandler = ({ target }: ChangeEvent<HTMLSelectElement>) => {
    setDeckValue(target.value);
  };

  const tagInputHandler = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setTagValue(target.value);
  };

  const resetInputs = () => {
    setfrontValue("");
    setbackValue("");
    setDeckValue("");
    setTagValue("");
  };

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!frontValue || !backValue) {
      return;
    }

    createCard({
      deckId: decks.find((deck) => deck.name === deckValue)?.id as string,
      front: frontValue,
      back: backValue,
      tag: tagValue,
      deckName: deckValue
    });
    resetInputs();
  };

  return (
    <form
      onSubmit={submitHandler}
      className="flex flex-col p-3 w-full h-full gap-4"
    >
      <h3 className="text-2xl">Card</h3>

      <Input
        id="front"
        label="Front"
        type="text"
        key="front"
        value={frontValue}
        onChange={frontInputHandler}
      />

      <Input
        id="back"
        label="Back"
        type="text"
        key="back"
        value={backValue}
        onChange={backInputHandler}
      />

      <Select
        id="deck"
        label="Deck"
        options={decks.map((deck) => deck.name)}
        value={deckValue}
        onChange={deckInputHandler}
      />

      <Input
        id="tag"
        label="Tag"
        type="text"
        key="tag"
        value={tagValue}
        onChange={tagInputHandler}
      />

      <div className="flex justify-end mt-auto">
        <Button onClick={onCloseModal} variant="info">Voltar</Button>
        <span className="w-2" />
        <Button type="submit">Criar</Button>
      </div>
    </form>
  );
}

export default CardForm;
