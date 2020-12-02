import React from 'react';

function SvgCornerCircle(props) {
  return (  
    <svg width="95" height="78" viewBox="0 0 95 78" fill="none" xmlns="http://www.w3.org/2000/svg">
    <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="-8" y="0" width="103" height="87">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M-8 78.4307L-1.20389 0.000178821L94.4242 8.28648L87.6281 86.717L-8 78.4307Z" fill="white"/>
    </mask>
    <g mask="url(#mask0)">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M-1.20389 0.000178821C51.6092 4.5765 91.3816 43.4004 87.6281 86.717L-8 78.4307L-1.20389 0.000178821Z" fill="#384CF9"/>
    </g>
    </svg>
  );
}

export default SvgCornerCircle;
