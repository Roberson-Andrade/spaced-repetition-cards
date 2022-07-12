/* eslint-disable react/button-has-type */
/* eslint-disable react/require-default-props */
import React from 'react';
import { selectColorBtn } from './utils';

export type ButtonProps = {
    children: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    variant?: 'primary' | 'warning' | 'error' | 'success' | 'info';
    type?: 'button' | 'submit' | 'reset' | undefined;
    className?: string;
}

function Button({
  children,
  variant,
  type = 'button',
  className,
  onClick,
}: ButtonProps) {
  const variantColor = selectColorBtn(variant);

  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-3 py-2 rounded-md text-white ${variantColor} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
