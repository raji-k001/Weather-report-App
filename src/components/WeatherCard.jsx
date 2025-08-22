
import React from "react";

const WeatherCard = ({ weather }) => {
  return (
    <div className="mt-4 text-lg">
      <p><strong>Weather:</strong> {weather.weather[0].main}</p>
      <p><strong>Temperature:</strong> {weather.main.temp}°C</p>
      <p><strong>Description:</strong> {weather.weather[0].description}</p>
    </div>
  );
};

export default WeatherCard;
