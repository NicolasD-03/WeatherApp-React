import React, { useRef } from 'react';

import Header from 'Components/Header';
import Form from 'Components/Form';
import Weather from 'Components/Weather';

import useData from 'Hooks/fetchData-hook';

const App = () => {
  const cityName = useRef(null);
  const { weatherData, error, isLoading, search } = useData();

  const handleSubmit = (event) => {
    event.preventDefault();
    search(cityName.current.value, 'metric', 'en');
  };

  return (
    <div>
      <Header name="test" />
      <h1>Welcome</h1>
      <div>What a beautiful app</div>
      <Form onSubmit={handleSubmit} inputValue={cityName} />
      {isLoading ? <div>Loading...</div> : null}
      {weatherData ? <Weather data={weatherData} /> : null}
      {error ? <div>{error}</div> : null}
    </div>
  );
};

export default App;
