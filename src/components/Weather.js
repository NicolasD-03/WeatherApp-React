import React from 'react';
import PropTypes from 'prop-types';

const Weather = ({ data }) => {
  return (
    <div>
      <div>{data.description}</div>
      <img src={data.iconLink} alt="Weather logo" />
      <div>Temperature: {data.temp}°C</div>
      <div>Min temperature: {data.temp_min}°C</div>
      <div>Max temperature: {data.temp_max}°C</div>
      <div>Feeling temperature: {data.feels_like}°C</div>
      <div>Humidity: {data.humidity}%</div>
      <div>
        {data.date}, {data.time}
      </div>
    </div>
  );
};

Weather.propTypes = {
  data: PropTypes.shape({
    iconLink: PropTypes.string,
    description: PropTypes.string,
    temp: PropTypes.number,
    temp_min: PropTypes.number,
    temp_max: PropTypes.number,
    fells_like: PropTypes.number,
    humidity: PropTypes.number,
    date: PropTypes.string,
    time: PropTypes.string,
  }),
};

export default Weather;
