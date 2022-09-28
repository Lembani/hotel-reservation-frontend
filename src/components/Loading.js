import React from 'react';

const Loading = () => (
  <div className="main">
    <img
      src={`${process.env.PUBLIC_URL}loading.gif`}
      className="loader"
      alt="loader"
    />
    <h4>Loading...</h4>
  </div>
);

export default Loading;
