/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useState } from "react";
import Badge from "../Badge";

type CardProps = {
    front: string;
    back: string;
    deckName: string;
    tag?: string;
    createdAt?: string;
}

function Card({
  front,
  back,
  deckName,
  tag,
  createdAt
}: CardProps) {
  const [flip, setFlip] = useState<"rotate-y-0" | "rotate-y-180">("rotate-y-0");

  const clickFlipHandler = () => {
    setFlip("rotate-y-180");
  };

  const leaveFlipHandler = () => {
    setFlip("rotate-y-0");
  };
  return (
    <div className="w-full max-w-[250px] h-full max-h-[300px] perspective-10">
      <div className={`w-full h-full transform-style-3d transition-transform duration-300 ${flip}`}>
        <article
          onClick={clickFlipHandler}
          onMouseLeave={leaveFlipHandler}
          onKeyDown={leaveFlipHandler}
          className="h-full w-full bg-white rounded-md shadow-md hover:shadow-xl hover:translate-y-[-3px] relative transform-style-3d transition-transform cursor-pointer"
        >
          <div className="flex flex-col gap-5 py-4 px-2 h-full w-full absolute backface-hidden">
            <header className="flex justify-between items-center text-gray-500">
              <div className="text-[12px]">
                {createdAt}
              </div>
              <div className="text-[14px] font-semibold">{deckName}</div>
            </header>

            <div className="text-[15px] p-3">
              {front}
            </div>

            <footer className="mt-auto self-end">
              <Badge>{tag}</Badge>
            </footer>
          </div>

          <div className="flex flex-col gap-5 py-4 px-2 h-full w-full absolute rotate-y-180 backface-hidden">
            <header className="flex justify-between items-center text-gray-500">
              <div className="text-[12px]">
                {createdAt}
              </div>
              <div className="text-[14px] font-semibold">{deckName}</div>
            </header>

            <div className="text-[15px] p-3">
              {back}
            </div>

            <footer className="mt-auto self-end">
              <Badge>{tag}</Badge>
            </footer>
          </div>
        </article>
      </div>
    </div>
  );
}

export default Card;
