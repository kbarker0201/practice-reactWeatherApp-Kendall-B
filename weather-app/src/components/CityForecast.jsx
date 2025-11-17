import React, { useEffect, useRef, useState } from 'react';

const CityForecast = ({ city, weatherData }) => {
  const [forecast, setForecast] = useState(null);
  const detailsRef = useRef(null);

  useEffect(() => {
    setForecast(null);
    const timer = setTimeout(() => {
      setForecast(weatherData);
    }, 500);

    return () => clearTimeout(timer);
  }, [city, weatherData]);

  const handleViewDetails = () => {
    detailsRef.current.scrollIntoView();
  };

  if (!forecast) {
    return <div>Loading forecast for {city}...</div>;
  }

  return (
    <div>
      <h2>Forecast for {city}</h2>
      <p>Summary: {forecast.summary}</p>
      <button onClick={handleViewDetails}>View Details</button>
      <div ref={detailsRef}>
        <h3>Details: </h3>
        <p>{forecast.details}</p>
      </div>
    </div>
  );
};

export default CityForecast;