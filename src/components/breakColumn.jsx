import React from 'react';
import breakColumnStyles from './breakColumn.module.scss';

export default ({ children }) => (
  <div className={breakColumnStyles.container}>{children}</div>
);
