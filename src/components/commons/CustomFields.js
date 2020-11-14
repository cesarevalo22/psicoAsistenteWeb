import React from 'react';

import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import DownArrowImage from '../../assets/images/svgFiles/SvgDownArrow';
import SvgSearch from '../../assets/images/svgFiles/svgSearch';

function EmailField(props) {
  return (
    <TextField
      className={props.hasText ? props.classNameText : props.className}
      error={Boolean(props.error)}
      variant="outlined"
      disabled={props.disabled || false}
      id={props.name}
      type="text"
      name={props.name}
      label={props.label}
      autoComplete="email"
      onChange={props.handleChange}
      helperText={props.error}
      defaultValue={props.defaultValue || ''}
    />
  );
}

function PasswordField(props) {
  return (
    <TextField
      autoComplete={props.autoComplete}
      className={props.hasText ? props.classNameText : props.className}
      error={Boolean(props.error)}
      variant="outlined"
      name={props.name}
      id={props.name}
      label={props.label}
      type={props.showPass ? 'text' : 'password'}
      onChange={props.handleChange}
      helperText={props.error}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={props.updateFunction}
              onMouseDown={(e) => {
                e.preventDefault();
              }}
            >
              {props.showPass ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
}

function SimpleTextField(props) {
  return (
    <TextField
      className={props.hasText ? props.classNameText : props.className}
      error={Boolean(props.error)}
      variant="outlined"
      id={props.name}
      type="text"
      disabled={props.disabled || false}
      name={props.name}
      defaultValue={props.defaultValue || ''}
      label={props.label }
      onChange={props.handleChange}
      helperText={props.error}
      inputRef={props.inputRef}
      
    />
  );
}

function MultiTextField(props) {
  return (
    <TextField
      select
      className={props.hasText ? props.classNameText : props.className}
      error={Boolean(props.error)}
      variant="outlined"
      id={props.name} 
      value= {props.value || ''}
      type="text"
      disabled={props.disabled || false}
      name={props.name}
      label={props.label}
      onChange={props.handleChange}
      helperText={props.error}
      SelectProps={{
        native: true,
        IconComponent: (props) => <DownArrowImage />,
      }}
      InputLabelProps={{ shrink: !!props.value }}


    >
      {props.data.map((option,key) => (
        <option key={key} value={option.id}>
          {option.name}
        </option>
      ))}
    </TextField>
  );
}

function TextAreaField(props) {
  return (
    <TextField
      className={props.hasText ? props.classNameText : props.className}
      error={Boolean(props.error)}
      variant="outlined"
      id={props.name}
      type="text"
      disabled={props.disabled || false}
      name={props.name}
      defaultValue={props.defaultValue || ''}
      label={props.label}
      onChange={props.handleChange}
      helperText={props.error}
      multiline
      rows={props.rows}
      rowsMax={props.rowsMax}
    />
  )
}



function CheckboxN(props) {
  return (
    <Checkbox
      name={props.name}
      checked={props.checked}
      disabled={props.disable || true}
      label={props.name}
      labelPlacement="start"
      onChange={props.handleChange}
      color="primary"
    />
  );
}

function DateField(props) {
  return (
    <TextField
      className={props.className}
      error={Boolean(props.error)}
      variant="outlined"
      id={props.name}
      type="date"
      name={props.name}
      defaultValue={props.defaultValue !== undefined ? props.defaultValue : ''}
      label={props.label !== undefined ? props.label : 'Campo de texto'}
      onChange={props.handleChange}
      helperText={props.error}
      disabled={props.disabled !== undefined ? props.disabled : false}
      InputLabelProps={{ shrink: !!props.defaultValue }}
    />
  );
}


function SearchBoxField(props) {
  return (
    <TextField
      className={props.className}
      variant="outlined"
      name={props.name}
      id={props.name}
      label={props.label || 'Buscar'}
      type={'text'}
      onChange={props.handleChange}
      value={props.value}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <SvgSearch />
          </InputAdornment>
        ),
      }}
    />
  );
}


export {
  CheckboxN,
  EmailField,
  MultiTextField,
  TextAreaField,
  PasswordField,
  SearchBoxField,
  SimpleTextField,
  DateField,
};