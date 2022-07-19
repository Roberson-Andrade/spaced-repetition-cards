import { BsInfoCircle } from "react-icons/bs";
import { CgCardClubs } from "react-icons/cg";
import { GiCardBurn, GiPapers } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import { useConfirmModal } from "../../hooks/useConfirmModal";
import HeatMap from "./components/HeatMap";

function HomeContent() {
  const [modal, createModal] = useConfirmModal();
  const navigate = useNavigate();
  return (
    <>
      <div className="flex-center p-3 flex-col gap-4 bg-[#F7F8FA] flex-grow media-sidebar">
        <div className="flex-center flex-col gap-2 p-2 w-full max-w-[830px]">
          <div className="flex items-center justify-between w-full">
            <h3 className="text-2xl 2sm:text-xl font-semibold">
              Home
            </h3>

            <p className="text-gray-500">
              {new Date().toLocaleDateString("pt-BR", { dateStyle: "medium" })}
            </p>
          </div>

          <div className="grid auto-rows-fr minMd:grid-cols-3 gap-3 w-full">
            <div className="flex-center flex-col justify-between gap-8 p-5 bg-white rounded-lg shadow-md minMd:col-span-2">
              <header className="w-full flex items-center justify-between">
                <h4 className="text-xl">Decks</h4>
                <button
                  type="button"
                  onClick={() => {
                    createModal({
                      title: (
                        <div className="flex items-center justify-between">
                          <h3 className="text-xl font-semibold">Deck</h3>
                          <GiCardBurn size="30px" />
                        </div>
                      ),
                      description: "Um deck é como um baralho. Armazena um conjunto de cards que contém perguntas e respostas sobre determinado tópico. Além disso, é possível criar categorias para cada deck para filtrá-lo posteriormente.",
                      confirmButtonText: "OK"
                    });
                  }}
                >
                  <BsInfoCircle size="20px" />
                </button>
              </header>
              <p>
                Crie um deck para armazenar cards relacionados!
              </p>
              <Button onClick={() => {
                navigate("/mydecks");
              }}
              >
                Criar deck
              </Button>
            </div>

            <div className="flex-center flex-col justify-between gap-8 p-5 bg-white rounded-lg shadow-md minMd:col-span-2">
              <header className="w-full flex items-center justify-between">
                <h4 className="text-xl">Cards</h4>
                <button
                  type="button"
                  onClick={() => {
                    createModal({
                      title: (
                        <div className="flex items-center justify-between">
                          <h3 className="text-xl font-semibold">Card</h3>
                          <CgCardClubs size="30px" />
                        </div>
                      ),
                      description: "Um card armazena informações em forma de perguntas e respostas que podem ser revisadas posteriormente. Os cards são relacionados a um deck e uma tag que pode ser utilizada como uma subcategoria.",
                      confirmButtonText: "OK"
                    });
                  }}
                >
                  <BsInfoCircle size="20px" />
                </button>
              </header>
              <p className="text-center">
                Crie um card para armazenar perguntas e respostas
                para adicionar em seu respectivo deck!
              </p>
              <Button onClick={() => {
                navigate("/mycards");
              }}
              >
                Criar card
              </Button>
            </div>

            <div className="flex-center flex-col justify-between gap-8 p-5 bg-white rounded-lg shadow-md minMd:row-start-1 minMd:col-start-3 minMd:row-span-2">
              <header className="w-full flex items-center justify-between">
                <h4 className="text-xl">Revisão</h4>
                <button
                  type="button"
                  onClick={() => {
                    createModal({
                      title: (
                        <div className="flex items-center justify-between">
                          <h3 className="text-xl font-semibold">Revisão</h3>
                          <GiPapers size="30px" />
                        </div>
                      ),
                      description: "Após criar os decks e seus cards, é possível realizar revisões do conteúdo dos cards. Uma vez realizada, os dados da revisão são armazenados e aquele card não aparecerá novamente para revisão até certo tempo.",
                      confirmButtonText: "OK"
                    });
                  }}
                >
                  <BsInfoCircle size="20px" />
                </button>
              </header>
              <p className="text-center">
                Você tem 30 cards a revisar!
              </p>
              <Button onClick={() => {
                navigate("/revisions");
              }}
              >
                Iniciar revisão
              </Button>
            </div>
            <div className="flex items-center px-5 minMd:col-span-3 xl:overflow-x-scroll">
              <HeatMap />
            </div>
          </div>
        </div>
      </div>
      {modal}
    </>
  );
}

export default HomeContent;
