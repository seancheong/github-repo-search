import classNames from 'classnames';
import React from 'react';
import { RepositoryItem } from '../../models';
import { formatDateTime } from '../../services/utilService';
import './Repository.scoped.css';

type Props = {
  item: RepositoryItem;
};

export const Repository: React.FC<Props> = ({
  item: {
    full_name,
    description,
    html_url,
    stargazers_count,
    language,
    updated_at,
  },
}) => {
  return (
    <li className="repository">
      <div className="container">
        <h3>{full_name}</h3>
        <div>{description}</div>
        <a className="text-sm" href={html_url}>
          {html_url}
        </a>

        <div className={classNames('sub-container', 'text-xs')}>
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
            <span>{formatDateTime(updated_at)}</span>
          </div>
        </div>
      </div>
    </li>
  );
};
