import { eachDayOfInterval } from "date-fns";
import Tooltip from "../../../components/Tooltip";
import { useStore } from "../../../store";
import { RevisionStats } from "../../../types";
import { matchRevisedCalendar, numberOfRevisionsToColor } from "./utils";

function HeatMap() {
  const dateNow = new Date();
  const pastYear = new Date(new Date().setFullYear(dateNow.getFullYear() - 1));
  const revisions = useStore((state) => state.revisionStats);
  const cards = useStore((state) => state.cards);

  const daysOfTheYear = eachDayOfInterval({
    start: pastYear,
    end: dateNow,
  });

  const calendar = matchRevisedCalendar(daysOfTheYear, revisions);

  return (
    <div className="flex flex-col gap-2">
      <p>
        Total de cards:
        {" "}
        {cards.length}
      </p>
      <div className="grid gap-1 grid-flow-col grid-rows-7 auto-cols-auto">
        {calendar.map((day) => {
          const date = (day as RevisionStats)?.date || day;
          const color = numberOfRevisionsToColor(
            (day as RevisionStats)?.numberOfRevisedCards
          );

          const revisedCardsMsg = (day as RevisionStats)?.numberOfRevisedCards
            ? `${
              (day as RevisionStats)?.numberOfRevisedCards
            } cards revisados em`
            : "0 cards revisados em";

          return (
            <Tooltip
              key={date.toString()}
              text={`${revisedCardsMsg} ${date.toLocaleString("pt-BR", {
                dateStyle: "medium",
              })}`}
              variant="info-xl"
            >
              <div className={`w-[11px] h-[11px] ${color}`} />
            </Tooltip>
          );
        })}
      </div>
    </div>
  );
}

export default HeatMap;
