import React from 'react';

function WeatherDisplay({weather}){

  const tempStyle = {
     color:weather.temperature>20 ? 'red' : 'blue';
  };

  return (
    <div>  
        <p>
            Temperature: <span style={tempStyle}>{weather.temperature}</span>
        </p>
        <p>Conditions: {weather.conditions}</p>
    </div>
  )
}

export default WeatherDisplay;
