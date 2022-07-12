import {
  ChangeEvent, FormEvent, useState
} from 'react';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Select from '../Select/Index';

const decks = ['Física', 'ENEM', 'Inglês', 'Matemática', 'História', 'Direito Constitucional'];

type CardFormProps = {
  onCloseModal: () => void;
}

function CardForm({ onCloseModal }: CardFormProps) {
  const [frontValue, setfrontValue] = useState('');
  const [backValue, setbackValue] = useState('');
  const [deckValue, setDeckValue] = useState('');
  const [tagValue, setTagValue] = useState('');

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

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('frontValue', frontValue);
    console.log('backValue', backValue);
    console.log('deckValue', deckValue);
    console.log('tagValue', tagValue);
  };

  return (
    <form onSubmit={submitHandler} className="flex flex-col p-3 w-full h-full gap-4">
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
        options={decks}
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

export default CardForm;
