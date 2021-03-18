import React from 'react';

function SvgBadgeDownArrow(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="6">
      <defs>
        <filter id="a">
          <feColorMatrix
            in="SourceGraphic"
            values="0 0 0 0 0.078431 0 0 0 0 0.435294 0 0 0 0 0.819608 0 0 0 1.000000 0"
          />
        </filter>
      </defs>
      <g fill="none" fillRule="evenodd" filter="url(#a)">
        <path
          fill="#2D3436"
          fillRule="nonzero"
          d="M8.87.88c.16.17.17.42.04.6l-.04.04-3.56 3.6a.44.44 0 01-.59.04l-.04-.04-3.55-3.6a.45.45 0 010-.64.44.44 0 01.59-.04l.04.04 3.23 3.28L8.24.88a.44.44 0 01.59-.04l.04.04z"
        />
      </g>
    </svg>
  );
}

export default SvgBadgeDownArrow;
