import { ChangeEvent, FormEvent, useState } from "react";
import { VscLoading } from "react-icons/vsc";
import { toast } from "react-toastify";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { defaultToast } from "../../constants/toastify";
import { useStore } from "../../store";
import Select from "../Select/Index";

type CardFormProps = {
  onCloseModal: () => void;
};

function CardForm({ onCloseModal }: CardFormProps) {
  const decks = useStore((state) => state.decks);
  const [frontValue, setfrontValue] = useState("");
  const [backValue, setbackValue] = useState("");
  const [deckValue, setDeckValue] = useState(decks[0]?.name || "");
  const [tagValue, setTagValue] = useState("");
  const createCard = useStore((state) => state.createCard);
  const [loading, setLoading] = useState(false);

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
    setTagValue("");
  };

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!frontValue || !backValue) {
      return;
    }
    setLoading(true);

    const cardData = {
      deckId: decks.find((deck) => deck.name === deckValue)?.id as string,
      front: frontValue,
      back: backValue,
      tag: tagValue,
      deckName: deckValue
    };

    createCard(cardData, (error) => {
      setLoading(false);

      if (error) {
        toast.error(error || "Erro interno", defaultToast);
        return;
      }
      toast.success("Card criado com sucesso!", defaultToast);
      resetInputs();
    });
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
        textArea
        value={frontValue}
        onChange={frontInputHandler}
        disabled={loading}
      />

      <Input
        id="back"
        label="Back"
        type="text"
        key="back"
        textArea
        value={backValue}
        onChange={backInputHandler}
        disabled={loading}
      />
      <Select
        id="deck"
        label="Deck"
        options={decks.map((deck) => deck.name)}
        value={deckValue}
        onChange={deckInputHandler}
        disabled={loading}
      />

      <Input
        id="tag"
        label="Tag"
        type="text"
        key="tag"
        value={tagValue}
        onChange={tagInputHandler}
        disabled={loading}
      />

      <div className="flex justify-end mt-auto">
        <Button onClick={onCloseModal} variant="info" disabled={loading}>
          Voltar
        </Button>
        <span className="w-2" />
        <Button type="submit" disabled={loading}>
          {loading ? <VscLoading className="animate-spin" size="20px" /> : "Criar"}
        </Button>
      </div>
    </form>
  );
}

export default CardForm;
