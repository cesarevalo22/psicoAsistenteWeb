import React from 'react';

function ButtonForm(props) {
  return (
    <button
            type={props.type}
            disabled={props.disabled}
            className={props.className}
            onClick={props.onClick}
          >
            <p>
              <span>{props.text}</span>
            </p>
          </button>
  );
}


export {
  ButtonForm,
};