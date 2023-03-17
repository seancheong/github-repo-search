import React from 'react';
import { render, screen, within } from '@testing-library/react';
import { RepositoriesTable } from './RepositoriesTable';
import { repositories } from '../../test';

describe('RepositoriesTable', () => {
  test('table is correctly rendered', () => {
    // given
    render(<RepositoriesTable repositories={repositories} />);

    // when
    const list = screen.getByRole('list');

    const withinList = within(list);
    const items = withinList.getAllByRole('listitem');

    const firstItem = items[0];
    const firstItemHeader = firstItem.querySelector('h3');
    const firstItemLink = firstItem.querySelector('a');

    // then
    expect(items.length).toBe(5);
    expect(firstItemHeader?.innerHTML).toBe(repositories.items[0].full_name);
    expect(firstItemLink).toHaveAttribute('href', repositories.items[0].url);
  });
});
