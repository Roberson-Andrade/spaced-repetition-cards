import Button from "../../components/Button";
import HeatMap from "./components/HeatMap";

function HomeContent() {
  return (
    <div className="flex-center p-3 flex-col gap-4 bg-[#F7F8FA] flex-grow">
      <div className="flex-center flex-col gap-3 p-2">
        <div>
          Você tem 34 cards a revisar!
        </div>
        <Button>
          Começar revisão
        </Button>
      </div>
      <div className="max-w-4xl">
        <HeatMap />
      </div>
    </div>
  );
}

export default HomeContent;
