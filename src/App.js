import React, { Component } from 'react';
import './App.css';

import TextInput from './components/TextInput';
import validate from './services/validate';
import Email from './components/Email';
import Select from './components/Select';

class App extends Component {

  constructor() {
    super();

    this.state = {
      formIsValid: false,
      formControls: {
        ssn: {
          value: '',
          placeholder: 'XXXXXX-XXXX',
          valid: false,
          validationRules: {
            isRequired: true,
            isSSN: true
          },
          touched: false
        },
        phNo: {
          value: '',
          placeholder: '+XX X XXX XXX XX',
          valid: false,
          validationRules: {
            isRequired: true,
            isPhoneNo: true
          },
          touched: false
        },
        email: {
          value: '',
          placeholder: 'Enter Email Address',
          valid: false,
          validationRules: {
            isRequired: true,
            isEmail: true
          },
          touched: false
        },
        country: {
          value: '',
          placeholder: 'Select Country',
          valid: true,
          touched: true,
          validationRules: {
            isRequired: true,
          },
          options: [
            { value: 'male', displayValue: 'Male' },
            { value: 'female', displayValue: 'Female' }
          ]
        }
      }
    }
  }

  changeHandler = event => {

    const name = event.target.name;
    const value = event.target.value;

    const updatedControls = {
      ...this.state.formControls
    };
    const updatedFormElement = {
      ...updatedControls[name]
    };
    updatedFormElement.value = value;
    updatedFormElement.touched = true;
    updatedFormElement.valid = validate(value, updatedFormElement.validationRules);

    updatedControls[name] = updatedFormElement;

    let formIsValid = true;
    for (let inputIdentifier in updatedControls) {
      formIsValid = updatedControls[inputIdentifier].valid && formIsValid;
    }

    this.setState({
      formControls: updatedControls,
      formIsValid: formIsValid
    });
  }


  formSubmitHandler = () => {
    console.log("Success");
  }


  render() {
    return (
      <div className="card mx-auto">
        <div className="card-body">
          <div className="App">
            <TextInput name="ssn"
              placeholder={this.state.formControls.ssn.placeholder}
              value={this.state.formControls.ssn.value}
              onChange={this.changeHandler}
              touched={this.state.formControls.ssn.touched.toString()}
              valid={this.state.formControls.ssn.valid.toString()}
              error="Please enter valid SSN"
              label="Social Security Number"
            />

            <TextInput name="phNo"
              placeholder={this.state.formControls.phNo.placeholder}
              value={this.state.formControls.phNo.value}
              onChange={this.changeHandler}
              touched={this.state.formControls.phNo.touched.toString()}
              valid={this.state.formControls.phNo.valid.toString()}
              error="Please enter valid Phone Number"
              label="Phone Number"
            />

            <Email name="email"
              placeholder={this.state.formControls.email.placeholder}
              value={this.state.formControls.email.value}
              onChange={this.changeHandler}
              touched={this.state.formControls.email.touched.toString()}
              valid={this.state.formControls.email.valid.toString()}
              error="Please enter valid Email"
              label="Email"
            />

            <Select name="country"
              value={this.state.formControls.country.value}
              onChange={this.changeHandler}
              options={this.state.formControls.country.options}
              touched={this.state.formControls.country.touched.toString()}
              valid={this.state.formControls.country.valid.toString()}
              label="Country"
            />

            <button className="btn btn-primary"
              onClick={this.formSubmitHandler}
              disabled={!this.state.formIsValid}>
              Submit
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;