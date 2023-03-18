import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { SearchForm } from './SearchForm';

const renderComponent = (handleSearch = jest.fn) => {
  render(<SearchForm inputPlaceholder="" onSearch={handleSearch} />);
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
    renderComponent();
    const input = screen.getByRole('textbox');
    const button = screen.getByRole('button', { name: /search/i });

    // when
    fireEvent.change(input, { target: { value: 'hello test' } });

    // then
    expect(button.getAttribute('disabled')).toBeNull();
  });

  test('clicking on button will trigger onSearch with text inside input box', () => {
    // given
    const searchString = 'search string';
    const handleSearch = jest.fn();

    renderComponent(handleSearch);
    const input = screen.getByRole('textbox');
    const button = screen.getByRole('button', { name: /search/i });

    // when
    fireEvent.change(input, { target: { value: searchString } });
    button.click();

    // then
    expect(handleSearch).toHaveBeenCalledWith(searchString);
  });
});
