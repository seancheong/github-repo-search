import React from 'react';
import { RepositoriesReponse } from '../../models';
import './RepositoriesTable.scoped.css';
import { Repository } from './Repository';

type Props = {
  repositories: RepositoriesReponse;
};

export const RepositoriesTable: React.FC<Props> = ({ repositories }) => {
  const renderRepositories = () => {
    return repositories.items.map((repository) => {
      return (
        <div key={repository.id}>
          <Repository item={repository} />
        </div>
      );
    });
  };

  return <ul className="table">{renderRepositories()}</ul>;
};
