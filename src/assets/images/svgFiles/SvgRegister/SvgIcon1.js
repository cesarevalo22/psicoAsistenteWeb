import React from 'react';

function SvgIcon1(props) {
  return (
    <svg width="44" height="45" transform={props.rotate} viewBox="0 0 44 45" fill="none" xmlns="http://www.w3.org/2000/svg">
    <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="-1" y="0" width="45" height="45">
    <path fillRule="evenodd" clipRule="evenodd" d="M-1 0H44V45H-1V0Z" fill="white"/>
    </mask>
    <g mask="url(#mask0)">
    <path fillRule="evenodd" clipRule="evenodd" d="M44 0C44 24.8524 23.8532 45 -1 45V0H44Z" fill="#384CF9"/>
    </g>
    </svg>
  );
}

export default SvgIcon1;