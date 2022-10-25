/* eslint-disable react/require-default-props */

import React from "react";

export type selectProps = {
  id: string;
  label: string;
  options: string[];
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
}

function Select({
  id,
  label,
  options,
  value,
  onChange,
}: selectProps) {
  return (
    <div className="flex flex-col" data-testid="select">
      <label htmlFor={id} className="text-sm" data-testid="label">
        {label}
      </label>
      <select
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        className="rounded-md border h-10 focus:outline-none border-blue-200 focus:border-blue-400 focus:border-2 py-1 px-2"
        data-testid="select-dropdown"
      >
        {options.map((option) => (
          <option key={option} value={option} data-testid={`${option}-option`}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
