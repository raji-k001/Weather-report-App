import React from "react";

const WeatherCard = ({ weather }) => {
  return (
    <div className="mt-4 text-lg space-y-2">
      <p><strong>City:</strong> {weather.name}</p>
      <p><strong>Weather:</strong> {weather.weather[0].main}</p>
      <p><strong>Temperature:</strong> {weather.main.temp}°C</p>
      <p><strong>Feels Like:</strong> {weather.main.feels_like}°C</p>
      <p><strong>Description:</strong> {weather.weather[0].description}</p>
    </div>
  );
};

export default WeatherCard;
