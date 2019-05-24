import React from 'react';
import PropTypes from 'prop-types';
const TextInput = props => {

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

TextInput.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  touched: PropTypes.string,
  valid: PropTypes.string,
  error: PropTypes.string,
  label: PropTypes.string,
};

export default TextInput;