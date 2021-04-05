import dashify from 'dashify';
import React from 'react';

// const H1 = props => <Header is="h1" {...props} />;
const H2 = ({ title }) => (
  <h2 id={dashify(title, { condense: true })}>{title}</h2>
);
// const H3 = props => <Header is="h3" {...props} />;
// const H4 = props => <Header is="h4" {...props} />;
// const H5 = props => <Header is="h5" {...props} />;
// const H6 = props => <Header is="h6" {...props} />;

export { H2 };
