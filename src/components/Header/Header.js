import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ name }) => {
  return (
    <header>
      <h1>Weather App</h1>
      <p>{name}</p>
    </header>
  );
};

Header.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Header;
