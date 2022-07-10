/* eslint-disable react/require-default-props */
import React from 'react';
import { selectColorBtn } from './utils';

export type ButtonProps = {
    children: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    variant?: 'primary' | 'warning' | 'error' | 'success' | 'info'
}

function Button({ children, variant, onClick }: ButtonProps) {
  const variantColor = selectColorBtn(variant);

  return (
    <button
      type="button"
      onClick={onClick}
      className={`px-3 py-2 rounded-md text-white ${variantColor}`}
    >
      {children}
    </button>
  );
}

export default Button;
