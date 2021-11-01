import React from 'react';
import PropTypes from 'prop-types';

const Form = ({ onSubmit, inputValue }) => {
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="city">City name:</label>
      <input
        id="city"
        type="text"
        ref={inputValue}
        placeholder="Enter a city name"
      />
      <input type="submit" value="Search" />
    </form>
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  inputValue: PropTypes.oneOfType([
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
};

export default Form;
