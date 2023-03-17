import React, { useState } from 'react';
import { Input } from './Input';
import { Button } from './Button';
import './SearchForm.scoped.css';

type Props = {
  inputPlaceholder: string;
  onSearch: (input: string) => void;
};

export const SearchForm: React.FC<Props> = ({ inputPlaceholder, onSearch }) => {
  const [input, setInput] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

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
        onChange={handleInputChange}
      />
      <Button disabled={!input}>Search</Button>
    </form>
  );
};
