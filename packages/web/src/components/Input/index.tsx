/* eslint-disable react/require-default-props */

import React from 'react';

export type InputProps = {
  type: string;
  id: string;
  label: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

function Input({
  id,
  type,
  label,
  value,
  onChange,
}: InputProps) {
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="text-sm">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        className="rounded-md border focus:outline-none border-blue-200 focus:border-blue-400 focus:border-2 py-1 px-2"
      />
    </div>
  );
}

export default Input;
