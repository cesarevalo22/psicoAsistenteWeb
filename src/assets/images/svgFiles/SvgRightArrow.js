import React from 'react';

function SvgRightArrow(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      viewBox={`0 0 ${props.width} ${props.height}`}
    >
      <g fill="none" fillRule="evenodd" transform="translate(-251 -19)">
        <g transform="rotate(-90 144 -107)">
          <path
            fill="#0b3e74"
            fillRule="nonzero"
            d="M16.741.765c.32.325.343.835.072 1.188l-.074.085-7.126 7.2c-.32.323-.822.347-1.17.073l-.084-.075-7.1-7.2c-.346-.351-.346-.92 0-1.272.32-.325.824-.35 1.172-.075l.084.075 6.473 6.564L15.486.762c.32-.323.824-.347 1.172-.072l.083.075z"
          />
        </g>
      </g>
    </svg>
  );
}

export default SvgRightArrow;
