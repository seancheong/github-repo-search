import React from 'react';
import { render, screen, within } from '@testing-library/react';
import { RepositoriesTable } from './RepositoriesTable';
import { repositories } from '../../test';

describe('RepositoriesTable', () => {
  beforeAll(() => {
    jest.useFakeTimers().setSystemTime(new Date('2023-03-18T04:00:00Z'));
  });

  test('table is correctly rendered', () => {
    // given
    render(<RepositoriesTable repositories={repositories} />);

    const list = screen.getByRole('list');

    const withinList = within(list);
    const items = withinList.getAllByRole('listitem');

    const firstItem = items[0];
    const firstItemHeader = firstItem.querySelector('h3');
    const firstItemLink = firstItem.querySelector('a');
    const firstItemUpdatedDateTime = firstItem.querySelector(
      '.metadata:nth-child(3) > span:nth-child(2)'
    );

    // then
    expect(items.length).toBe(5);
    expect(firstItemHeader?.innerHTML).toBe(repositories.items[0].full_name);
    expect(firstItemLink).toHaveAttribute(
      'href',
      repositories.items[0].html_url
    );
    expect(firstItemUpdatedDateTime?.innerHTML).toBe('16 hours ago');
  });

  afterAll(() => {
    jest.useRealTimers();
  });
});
