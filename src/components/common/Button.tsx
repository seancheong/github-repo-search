import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';
import './Button.scoped.css';

type Props = {
  disabled?: boolean;
  onClick?: () => void;
};

export const Button: React.FC<PropsWithChildren<Props>> = ({
  disabled,
  onClick,
  children,
}) => {
  const classes = classNames({ disabled }, 'text-sm');

  return (
    <button className={classes} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};
