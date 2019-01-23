import * as React from 'react';
import Helmet from 'react-helmet';

// @ts-ignore
import favicon from '../../src/favicon.ico';

import '../styles/seed.less';

interface IndexProps {
  className?: string;
}

const IndexLayout: React.FunctionComponent<IndexProps> = props => {
  return <div className={props.className}>
    <Helmet>
      <link rel="icon" href={favicon} type="image/x-icon" />
    </Helmet>
    {props.children}
  </div>;
};

export default IndexLayout;
