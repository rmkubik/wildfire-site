import React from 'react';
import gridStyles from './grid.module.scss';

export const GridCell = ({ title, children }) => (
  <div>
    <h3>{title}</h3>
    {children}
  </div>
);

export const Grid = ({ children }) => (
  <div className={gridStyles.container}>{children}</div>
);
