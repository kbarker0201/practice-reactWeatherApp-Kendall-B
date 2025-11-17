import React, { useState } from 'react';
import CityList from './components/CityList';
import CityForecast from './components/CityForecast';

const weatherData = {
  NewYork: { summary: "Sunny, 25°C", details: "Clear skies throughout the day with mild temperatures." },
  London: { summary: "Cloudy, 18°C", details: "Overcast with occasional light rain in the afternoon." },
  Tokyo: { summary: "Rainy, 22°C", details: "Continuous rain expected throughout the day." },
};

function App() {
  const [selectedCity, setSelectedCity] = useState(null);

  const handleCitySelect = (city) => {
    setSelectedCity(city);
  };

  return (
    <div>
      <h1>Weather Forecast App</h1>
      <CityList cities={Object.keys(weatherData)} onSelectCity={handleCitySelect} />
      {selectedCity && (
        <CityForecast city={selectedCity} weatherData={weatherData[selectedCity]} />
      )}
    </div>
  );
};

export default App;