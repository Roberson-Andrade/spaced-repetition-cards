import {
  ChangeEvent, FormEvent, useState
} from "react";
import { AiOutlineLoading } from "react-icons/ai";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { defaultToast } from "../../constants/toastify";
import { useStore } from "../../store";
import { DeckFormProps } from "../../types";

function DeckForm({ onCloseModal }: DeckFormProps) {
  const [nameValue, setNameValue] = useState("");
  const [categoryValue, setCategoryValue] = useState("");
  const createDeck = useStore((state) => state.createDeck);
  const [loading, setLoading] = useState(false);

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
    setLoading(true);
    createDeck(
      {
        name: nameValue,
        category: categoryValue
      },
      (error) => {
        setLoading(false);
        if (error) {
          toast.error(error || "Erro interno", defaultToast);
          return;
        }
        toast.success("Deck criado com sucesso!", defaultToast);
      }
    );
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
        disabled={loading}
      />

      <Input
        id="category"
        label="Categoria"
        type="text"
        key="category"
        onChange={categoryInputHandler}
        value={categoryValue}
        disabled={loading}
      />

      <div className="flex justify-end mt-auto">
        <Button onClick={onCloseModal} disabled={loading}>
          Voltar
        </Button>
        <span className="w-2" />
        <Button type="submit" disabled={loading}>
          {loading ? <AiOutlineLoading className="animate-spin" /> : "Criar"}
        </Button>
      </div>
    </form>
  );
}

export default DeckForm;
