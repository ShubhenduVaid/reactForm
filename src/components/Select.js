import React from 'react';
import PropTypes from 'prop-types';
const Select = props => {

  let formControl = "form-control";

  return (
    <div className="form-group">
      <label>{props.label}</label>
      <select name={props.name} className={formControl} value={props.value} onChange={props.onChange}>
        {props.options.map(option => (
          <option key={option.value} value={option.value}>
            {option.displayValue}
          </option>
        ))}
      </select>
    </div>
  );
}

Select.propTypes = {
  value: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  valid: PropTypes.string,
  touched: PropTypes.string,
  label: PropTypes.string,
};

export default Select;