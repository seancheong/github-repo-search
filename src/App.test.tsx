import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(
    <QueryClientProvider client={new QueryClient()}>
      <App />
    </QueryClientProvider>
  );
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
