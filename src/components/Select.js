import React from 'react';

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

export default Select;