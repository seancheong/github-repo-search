import React from 'react';
import { RepositoryItem } from '../../models';
import './Repository.scoped.css';

type Props = {
  item: RepositoryItem;
};

export const Repository: React.FC<Props> = ({
  item: { full_name, description, url, stargazers_count, language, updated_at },
}) => {
  return (
    <li className="repository">
      <div className="container">
        <h3>{full_name}</h3>
        <div>{description}</div>
        <a className="text-sm" href={url}>
          {url}
        </a>

        <div className="sub-container">
          <div className="metadata">
            <span>Stars: </span>
            <span>{stargazers_count}</span>
          </div>

          <div className="metadata">
            <span>Language: </span>
            <span>{language ?? 'N/A'}</span>
          </div>

          <div className="metadata">
            <span>Updated at: </span>
            <span>{updated_at}</span>
          </div>
        </div>
      </div>
    </li>
  );
};
