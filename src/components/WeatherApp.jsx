import React, { useState } from "react";
import axios from "axios";   
import Background, { getWeatherEmoji } from "./Background"; // ✅ import emoji helper
import Search from "./Search";
import WeatherCard from "./WeatherCard";

const WeatherApp = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_KEY = "4e13045d5f13b8253baecfe408de4075"; 

  const getWeather = async () => {
    if (!city) return;
    setLoading(true);
    setError("");
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather`,
        {
          params: {
            q: city,
            appid: API_KEY,
            units: "metric",
          },
        }
      );

      setWeather(response.data);
    } catch (err) {
      if (err.response && err.response.status === 404) {
        setError("City not found!");
      } else {
        setError("Failed to fetch weather data. Try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Background condition={weather ? weather.weather[0].main : null}>
      <div className="bg-white p-6 rounded-xl w-[500px] bg-opacity-80 shadow-xl">
        <h2 className="text-2xl font-bold mb-2">Weather Report</h2>
        <p className="mb-4">Checking the sky’s mood swings for your city </p>

        <Search city={city} setCity={setCity} onSearch={getWeather} />

        {weather && (
          <div className="mt-4 text-6xl animate-bounce text-center">
            {getWeatherEmoji(weather.weather[0].main)}
          </div>
        )}

        {loading && <p className="mt-4 text-blue-600">Loading...</p>}
        {error && <p className="mt-4 text-red-500">{error}</p>}
        {weather && !loading && <WeatherCard weather={weather} />}
      </div>
    </Background>
  );
};

export default WeatherApp;
