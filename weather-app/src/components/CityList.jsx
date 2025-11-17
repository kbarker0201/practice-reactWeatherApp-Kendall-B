import React from 'react';

const CityList = ({ cities, onSelectCity }) => {
  return (
    <div>
      <h2>Select a City</h2>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {cities.map((city) => (
          <li key={city} style={{ margin: '10px 0' }}>
            <button onClick={() => onSelectCity(city)}>
              {city}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CityList;