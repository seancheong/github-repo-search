import { render, screen } from '@testing-library/react';
import React from 'react';
import { Pagination, Props } from './Pagination';

const renderComponent = (props: Partial<Props> = {}) => {
  const componentProps: Props = {
    currentPage: 1,
    totalPages: 100,
    onPageChange: jest.fn(),
    ...props,
  };

  const { currentPage, totalPages, onPageChange } = componentProps;

  render(
    <Pagination
      currentPage={currentPage}
      totalPages={totalPages}
      onPageChange={onPageChange}
    />
  );
};

describe('Pagination', () => {
  test('page number is correctly rendered', () => {
    // given
    const currentPage = 10;

    renderComponent({ currentPage });
    const pageNumber = screen.getByText(/page/i);

    // then
    expect(pageNumber.innerHTML).toBe(`Page ${currentPage}`);
  });

  test('previous button should be disabled on first page', () => {
    // given
    const currentPage = 1;

    renderComponent({ currentPage });
    const previousButton = screen.getByRole('button', { name: /previous/i });

    // then
    expect(previousButton.getAttribute('disabled')).not.toBeNull();
  });

  test('previous button will not be disabled if it is not first page', () => {
    // given
    const currentPage = 2;

    renderComponent({ currentPage });
    const previousButton = screen.getByRole('button', { name: /previous/i });

    // then
    expect(previousButton.getAttribute('disabled')).toBeNull();
  });

  test('clicking on previous button will trigger onPageChange with currentPage minus 1', () => {
    // given
    const currentPage = 3;
    const onPageChange = jest.fn();

    renderComponent({ currentPage, onPageChange });
    const previousButton = screen.getByRole('button', { name: /previous/i });

    // when
    previousButton.click();

    // then
    expect(onPageChange).toHaveBeenCalledWith(currentPage - 1);
  });

  test('next button should be disabled on last page', () => {
    // given
    const currentPage = 10;
    const totalPages = 10;

    renderComponent({ currentPage, totalPages });
    const nextButton = screen.getByRole('button', { name: /next/i });

    // then
    expect(nextButton.getAttribute('disabled')).not.toBeNull();
  });

  test('next button will not be disabled if it is not last page', () => {
    // given
    const currentPage = 9;
    const totalPages = 10;

    renderComponent({ currentPage, totalPages });
    const nextButton = screen.getByRole('button', { name: /next/i });

    // then
    expect(nextButton.getAttribute('disabled')).toBeNull();
  });

  test('clicking on next button will trigger onPageChange with currentPage plus 1', () => {
    // given
    const currentPage = 3;
    const onPageChange = jest.fn();

    renderComponent({ currentPage, onPageChange });
    const nextButton = screen.getByRole('button', { name: /next/i });

    // when
    nextButton.click();

    // then
    expect(onPageChange).toHaveBeenCalledWith(currentPage + 1);
  });
});
