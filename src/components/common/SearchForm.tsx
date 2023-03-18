import React from 'react';
import { Input } from './Input';
import { Button } from './Button';
import './SearchForm.scoped.css';

export type Props = {
  input: string;
  inputPlaceholder: string;
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: (input: string) => void;
};

export const SearchForm: React.FC<Props> = ({
  input,
  inputPlaceholder,
  onInputChange,
  onSearch,
}) => {
  const handleFormSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(input);
  };

  return (
    <form className="search-form" onSubmit={handleFormSubmit}>
      <Input
        input={input}
        type="text"
        placeholder={inputPlaceholder}
        onChange={onInputChange}
      />
      <Button disabled={!input}>Search</Button>
    </form>
  );
};
