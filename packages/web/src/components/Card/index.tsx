/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useEffect, useState } from "react";
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";
import Badge from "../Badge";
import IconButton from "../IconButton";

type CardProps = {
    front: string;
    back: string;
    deckName: string;
    tag?: string;
    createdAt?: string;
    className?: string;
    rotateDisabled?: boolean;
    flipToggle?: boolean;
    showActionButtons?: boolean;
    disableFlipAnimation?: boolean;
    onClickSuccessBtn?: React.MouseEventHandler<HTMLButtonElement>;
    onClickFailBtn?: React.MouseEventHandler<HTMLButtonElement>;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
    onAnimationEnd?: React.AnimationEventHandler<HTMLDivElement>;
}

function Card({
  front,
  back,
  deckName,
  tag,
  createdAt,
  className,
  rotateDisabled,
  flipToggle,
  showActionButtons,
  disableFlipAnimation,
  onClick,
  onClickSuccessBtn,
  onClickFailBtn,
  onAnimationEnd
}: CardProps) {
  const [flip, setFlip] = useState<"rotate-y-0" | "rotate-y-180">("rotate-y-0");

  const clickHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    if (onClick) {
      onClick(event);
    }
    if (rotateDisabled) {
      return;
    }
    if (flipToggle) {
      setFlip((prevState) => (prevState === "rotate-y-0" ? "rotate-y-180" : "rotate-y-0"));
      return;
    }
    setFlip("rotate-y-180");
  };

  const leaveFlipHandler = () => {
    if (flipToggle) {
      return;
    }
    setFlip("rotate-y-0");
  };

  useEffect(() => {
    setFlip("rotate-y-0");
  }, [rotateDisabled]);
  return (
    <div
      onClick={clickHandler}
      onMouseLeave={leaveFlipHandler}
      onKeyDown={leaveFlipHandler}
      className={`w-full max-w-[250px] h-full max-h-[300px] perspective-10 ${className || ""}`}
      role="button"
      tabIndex={0}
      onAnimationEnd={onAnimationEnd}
    >
      <div className={`w-full h-full transform-style-3d ${disableFlipAnimation ? "" : "transition-transform duration-300"} ${flip}`}>
        <article
          className="h-full w-full bg-white rounded-md shadow-md hover:shadow-xl hover:translate-y-[-3px] relative transform-style-3d transition-transform cursor-pointer"
        >
          <div className="flex flex-col gap-5 py-4 px-2 h-full w-full absolute backface-hidden">
            <header className="flex justify-between items-center text-gray-500">
              <div className="text-[12px]">
                {createdAt}
              </div>
              <div className="text-[14px] font-semibold">{deckName}</div>
            </header>

            <div className="text-[15px] p-3 text-center">
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

            <div className="text-[15px] p-3 text-center">
              {back}
            </div>

            {showActionButtons && (
            <div className="flex justify-center gap-2 mt-auto">
              <IconButton
                onClick={onClickFailBtn}
                className="rounded-full hover:-translate-y-1 active:translate-y-0"
              >
                <AiFillCloseCircle size="50px" color="#cf142b" />

              </IconButton>
              <IconButton
                onClick={onClickSuccessBtn}
                className="hover:-translate-y-1 active:translate-y-0"
              >
                <AiFillCheckCircle size="50px" color="#4BB543" />
              </IconButton>
            </div>
            )}

            <footer className={`${showActionButtons ? "" : "mt-auto"} self-end`}>
              <Badge>{tag}</Badge>
            </footer>
          </div>
        </article>
      </div>
    </div>
  );
}

export default Card;
