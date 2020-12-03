import React from 'react';

function SvgCircle(props) {
  return (

    <svg width={props.width} height={props.height} viewBox="0 0 136 136" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M135.9 67.8629C135.9 30.3831 105.478 0 67.9496 0C30.4228 0 0 30.3831 0 67.8629C0 105.343 30.4228 135.726 67.9496 135.726C105.478 135.726 135.9 105.343 135.9 67.8629Z" fill={props.color}/>
    </svg>
  );
}

export default SvgCircle;
