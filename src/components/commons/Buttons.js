import React from 'react';

function ButtonForm(props) {
  return (
    <button
            type={props.type}
            className={props.className}
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