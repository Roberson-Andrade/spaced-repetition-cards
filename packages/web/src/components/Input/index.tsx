/* eslint-disable react/require-default-props */

import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

export type InputProps = {
  type: string;
  id: string;
  label?: string;
  value: string;
  variant?: "search";
  className?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

function Input({
  id,
  type,
  label,
  value,
  variant,
  className,
  onChange,
}: InputProps) {
  let classVariant: string;

  switch (variant) {
    case "search":
      classVariant = "pl-7";
      break;

    default:
      classVariant = "";
      break;
  }
  return (
    <div className={`flex flex-col ${className} relative`}>
      <label htmlFor={id} className="text-sm">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        className={`rounded-md border focus:outline-none border-blue-200 focus:border-blue-400 focus:border-2 py-1 px-2 ${classVariant}`}
      />
      {variant === "search" && (
      <div className="absolute rotate-y-180 left-2 bottom-[8px] pointer-events-none">
        <AiOutlineSearch className="fill-gray-400" size="20px" />
      </div>
      )}
    </div>
  );
}

export default Input;
