import React, { HTMLInputTypeAttribute } from 'react';
import './Input.scoped.css';

type Props = {
  input: string;
  type: HTMLInputTypeAttribute;
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input: React.FC<Props> = ({
  input,
  type,
  placeholder,
  onChange,
}) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event);
  };

  return (
    <input
      className="text-sm"
      type={type}
      placeholder={placeholder}
      value={input}
      onChange={handleInputChange}
    />
  );
};
