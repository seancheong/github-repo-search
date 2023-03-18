import React from 'react';
import { render, screen } from '@testing-library/react';
import { SearchForm, Props } from './SearchForm';

const renderComponent = (props: Partial<Props> = {}) => {
  const componentProps: Props = {
    input: '',
    inputPlaceholder: '',
    onInputChange: jest.fn(),
    onSearch: jest.fn(),
    ...props,
  };

  const { input, inputPlaceholder, onInputChange, onSearch } = componentProps;

  render(
    <SearchForm
      input={input}
      inputPlaceholder={inputPlaceholder}
      onInputChange={onInputChange}
      onSearch={onSearch}
    />
  );
};

describe('SearchForm', () => {
  test('button is disabled when the input box is empty', () => {
    // given
    renderComponent();
    const button = screen.getByRole('button', { name: /search/i });

    // then
    expect(button.getAttribute('disabled')).not.toBeNull();
  });

  test('button is enabled when the input box is not empty', () => {
    // given
    const searchString = 'search string';

    renderComponent({ input: searchString });
    const button = screen.getByRole('button', { name: /search/i });

    // then
    expect(button.getAttribute('disabled')).toBeNull();
  });

  test('clicking on button will trigger onSearch with text inside input box', () => {
    // given
    const searchString = 'search string';
    const handleSearch = jest.fn();

    renderComponent({ input: searchString, onSearch: handleSearch });
    const button = screen.getByRole('button', { name: /search/i });

    // when
    button.click();

    // then
    expect(handleSearch).toHaveBeenCalledWith(searchString);
  });
});
