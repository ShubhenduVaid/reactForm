import React from 'react';

const Email = props => {

  let formControl = "form-control";
  let validationError = null;

  if (props.touched === 'true' && props.valid === 'false' && props.value.trim() !== '') {
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

export default Email;