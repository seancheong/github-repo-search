import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { fireEvent, render, screen } from '@testing-library/react';
import { SearchForm } from './SearchForm';

const renderComponent = () => {
  const queryClient = new QueryClient();

  render(
    <QueryClientProvider client={queryClient}>
      <SearchForm inputPlaceholder="" onSearch={jest.fn} />
    </QueryClientProvider>
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
    renderComponent();
    const input = screen.getByRole('textbox');
    const button = screen.getByRole('button', { name: /search/i });

    // when
    fireEvent.change(input, { target: { value: 'hello test' } });

    // then
    expect(button.getAttribute('disabled')).toBeNull();
  });
});
