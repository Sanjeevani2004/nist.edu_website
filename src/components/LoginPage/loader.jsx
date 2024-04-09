import React from 'react';
import { css } from '@emotion/react';
import { InfinitySpinner } from 'react-spinners';

const override = css`
  display: block;
  margin: 0 auto;
`;

const PageLoader = ({ loading }) => {
  return (
    <div className="page-loader">
      <InfinitySpinner loading={loading} color="#123abc" css={override} size={50} />
    </div>
  );
}

export default PageLoader;
