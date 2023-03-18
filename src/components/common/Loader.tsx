import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';
import { RotatingLines } from 'react-loader-spinner';
import './Loader.scoped.css';

type Props = {
  isLoading: boolean;
};

export const Loader: React.FC<PropsWithChildren<Props>> = ({
  isLoading,
  children,
}) => {
  return (
    <div className="container">
      <div className="loader">
        <RotatingLines strokeColor="rgb(13 148 136)" visible={isLoading} />
      </div>

      <div className={classNames({ disabled: isLoading })}>{children}</div>
    </div>
  );
};
