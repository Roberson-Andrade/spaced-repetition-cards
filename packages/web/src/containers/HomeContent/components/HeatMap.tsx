import { eachDayOfInterval } from "date-fns";
import Tooltip from "../../../components/Tooltip";
import { matchRevisedCalendar, numberOfRevisionsToColor } from "./utils";

type RevisionStats = {
  date: Date,
  numberOfRevisedCards: number
}

const mockRevisions: RevisionStats[] = [
  {
    date: new Date(2022, 6, 14),
    numberOfRevisedCards: 5
  },
  {
    date: new Date(2022, 6, 13),
    numberOfRevisedCards: 35
  },
  {
    date: new Date(2022, 6, 12),
    numberOfRevisedCards: 20
  },
  {
    date: new Date(2022, 6, 10),
    numberOfRevisedCards: 80
  },
  {
    date: new Date(2022, 6, 9),
    numberOfRevisedCards: 45
  },
  {
    date: new Date(2022, 6, 8),
    numberOfRevisedCards: 60
  },
  {
    date: new Date(2022, 6, 6),
    numberOfRevisedCards: 50
  },
  {
    date: new Date(2022, 6, 5),
    numberOfRevisedCards: 10
  },
  {
    date: new Date(2022, 6, 3),
    numberOfRevisedCards: 80
  },
];

function HeatMap() {
  const dateNow = new Date();
  const pastYear = new Date(new Date().setFullYear(dateNow.getFullYear() - 1));

  const daysOfTheYear = eachDayOfInterval({
    start: pastYear,
    end: dateNow
  });

  const calendar = matchRevisedCalendar(daysOfTheYear, mockRevisions);

  return (
    <div className="grid gap-1 grid-flow-col grid-rows-7 auto-cols-auto">
      {calendar.map((day) => {
        const date = (day as RevisionStats)?.date || day;
        const color = numberOfRevisionsToColor((day as RevisionStats)?.numberOfRevisedCards);

        const revisedCardsMsg = (day as RevisionStats)?.numberOfRevisedCards ? `${(day as RevisionStats)?.numberOfRevisedCards} cards revisados em` : "0 cards revisados em";

        return (
          <Tooltip
            key={date.toString()}
            text={`${revisedCardsMsg} ${date.toLocaleString("pt-BR", { dateStyle: "medium" })}`}
          >
            <div className={`w-[11px] h-[11px] ${color}`} />
          </Tooltip>
        );
      })}
    </div>
  );
}

export default HeatMap;
