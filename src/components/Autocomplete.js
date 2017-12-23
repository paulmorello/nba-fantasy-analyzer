import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Autocomplete extends Component {
  constructor() {
    super();
    this.state = {
    }
  }

  render() {
    return (
      <datalist id="players">
        <option value="Chrome" />
        <option value="Firefox" />
        <option value="Internet Explorer" />
        <option value="Opera" />
        <option value="Safari" />
        <option value="Microsoft Edge" />
      </datalist>
    )
  }
}

  Autocomplete.propTypes = {

  }


export default Autocomplete;
