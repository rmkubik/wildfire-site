import React from 'react';
import centerStyles from './center.module.scss';

export default ({ children }) => (
  <div className={centerStyles.container}>{children}</div>
);
