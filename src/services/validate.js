export const validate = (value, rules) => {

  let isValid = true;

  for (let rule in rules) {
    switch (rule) {
      case 'isEmail':
        isValid = isValid && emailValidator(value);
        break;

      case 'isSSN':
        isValid = isValid && ssnValidator(value);
        break;

      case 'isPhoneNo':
        isValid = isValid && phnoValidator(value);
        break;

      case 'isRequired':
        isValid = isValid && requiredValidator(value);
        break;

      default: isValid = true;
    }
  }

  return isValid;
}

const requiredValidator = value => {
  return value.trim() !== '';
}

const emailValidator = value => {
  // eslint-disable-next-line no-useless-escape
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(value).toLowerCase());
}

// https://www.etl-tools.com/regular-expressions/is-swedish-phone-number.html
const phnoValidator = value => {
  var re = /^(([+]\d{2}[ ][1-9]\d{0,2}[ ])|([0]\d{1,3}[-]))((\d{2}([ ]\d{2}){2})|(\d{3}([ ]\d{3})*([ ]\d{2})+))$/;
  return re.test(String(value).toLowerCase());
}

// https://codepen.io/LasseStilvang/pen/WrLKbb?editors=0010
const ssnValidator = ssn => {
  ssn = ssn
    .replace(/\D/g, "")     // strip out all but digits
    .split("")              // convert string to array
    .reverse()              // reverse order for Luhn
    .slice(0, 10);          // keep only 10 digits (i.e. 1977 becomes 77)

  // verify we got 10 digits, otherwise it is invalid
  if (ssn.length !== 10) {
    return false;
  }

  var sum = ssn
    // convert to number
    .map(function (n) {
      return Number(n);
    })
    // perform arithmetic and return sum
    .reduce(function (previous, current, index) {
      // multiply every other number with two
      if (index % 2) current *= 2;
      // if larger than 10 get sum of individual digits (also n-9)
      if (current > 9) current -= 9;
      // sum it up
      return previous + current;
    });

  // sum must be divisible by 10
  return 0 === sum % 10;
}

export default validate;