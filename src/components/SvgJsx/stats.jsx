import * as React from 'react';

const SvgStats = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="1em" height="1em" {...props}>
    <g fill="#37474F">
      <path d="M23 5h2v36h-2z" />
      <path d="m25.817 32.772 1.414 1.414-10.04 10.04-1.414-1.414z" />
      <path d="m32.259 42.824-1.414 1.414-10.04-10.04 1.414-1.414z" />
    </g>
    <path fill="#CFD8DC" d="M4 8h40v28H4z" />
    <g fill="#607D8B">
      <path d="M3 7h42v4H3zm0 28h42v2H3z" />
      <circle cx={31.5} cy={43.5} r={1.5} />
      <circle cx={16.5} cy={43.5} r={1.5} />
    </g>
    <g fill="#C51162">
      <path d="m31.9 18.9-5.9 6-6-6-8.1 8 2.2 2.2 5.9-6 6 6 8.1-8z" />
      <path d="m36 24-7-7h7z" />
    </g>
  </svg>
);

export default SvgStats;
