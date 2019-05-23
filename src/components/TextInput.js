import React from 'react';

const TextInput = props => {

  let formControl = "form-control";
  let validationError = null;

  if (props.touched && !props.valid && props.value.trim() !== '') {
    formControl = 'form-control control-error';
    validationError = <p className="text-danger">{props.error}</p>;
  }

  return (
    <div className="form-group">
      <label>{props.label}</label>
      <input type="text" className={formControl} {...props} />
      {validationError}
    </div>
  );
}

export default TextInput;