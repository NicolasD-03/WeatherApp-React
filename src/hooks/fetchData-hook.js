import { useState } from 'react';

import timeConverter from 'Utils/timeConverter';

const useData = () => {
  const { API_KEY } = process.env;
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const search = async (cityName, unit, language) => {
    setWeatherData(null);
    setError(null);
    try {
      setIsLoading(true);
      const req = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=${unit}&lang=${language}`
      );
      if (!req.ok) {
        throw Error("Sorry we can't retrieve data");
      }
      const data = await req.json();
      const customData = {
        iconLink: `http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`,
        description: data.weather[0].description,
        temp: Math.round(data.main.temp),
        temp_min: Math.round(data.main.temp_min),
        temp_max: Math.round(data.main.temp_max),
        feels_like: Math.round(data.main.feels_like),
        humidity: data.main.humidity,
        time: timeConverter(data.dt, 'fr-FR').time,
        date: timeConverter(data.dt, 'fr-FR').date,
      };
      setIsLoading(false);
      setWeatherData(customData);
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
    }
  };

  return {
    weatherData,
    error,
    isLoading,
    search,
  };
};

export default useData;
