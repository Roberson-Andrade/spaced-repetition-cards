import {
  ChangeEvent, FormEvent, useState
} from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { useStore } from "../../store";
import { DeckFormProps } from "../../types";

function DeckForm({ onCloseModal }: DeckFormProps) {
  const [nameValue, setNameValue] = useState("");
  const [categoryValue, setCategoryValue] = useState("");
  const createDeck = useStore((state) => state.createDeck);

  const nameInputHandler = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setNameValue(target.value);
  };

  const categoryInputHandler = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setCategoryValue(target.value);
  };

  const resetInputs = () => {
    setNameValue("");
    setCategoryValue("");
  };

  const submitHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (nameValue === "" || categoryValue === "") {
      return;
    }
    createDeck(nameValue, categoryValue);
    resetInputs();
  };

  return (
    <form onSubmit={submitHandler} className="flex flex-col p-3 w-full h-full gap-4">
      <h3 className="text-2xl">Deck</h3>
      <Input
        id="name"
        label="Nome"
        type="text"
        key="name"
        onChange={nameInputHandler}
        value={nameValue}
      />

      <Input
        id="category"
        label="Categoria"
        type="text"
        key="category"
        onChange={categoryInputHandler}
        value={categoryValue}
      />

      <div className="flex justify-end mt-auto">
        <Button onClick={onCloseModal}>
          Voltar
        </Button>
        <span className="w-2" />
        <Button type="submit">
          Criar
        </Button>
      </div>
    </form>
  );
}

export default DeckForm;
