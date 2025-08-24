// src/components/Background.jsx
import React from "react";

const getBackgroundImage = (condition) => {
  if (!condition) return "/images/default.jpg";

  switch (condition.toLowerCase()) {
    case "clear":
      return "/images/clear.jpg";   
    case "clouds":
      return "/images/clouds.jpg";  
    case "rain":
      return "/images/rain.jpg";    
    case "thunderstorm":
      return "/images/thunderstorm.jpg"; 
    case "drizzle":
      return "/images/drizzle.jpg"; 
    case "snow":
      return "/images/cold.jpg";    
    case "mist":
    case "fog":
    case "haze":
      return "/images/mist.jpg";    
    case "smoke":
    case "dust":
    case "sand":
      return "/images/smoke.jpg";   
    default:
      return "/images/mild.jpg"; 
  }
};

// 🔹 Export the emoji function too
export const getWeatherEmoji = (condition) => {
  if (!condition) return "❓";
  switch (condition.toLowerCase()) {
    case "clear": return "☀️";
    case "clouds": return "☁️";
    case "rain": return "🌧️";
    case "thunderstorm": return "⛈️";
    case "drizzle": return "🌦️";
    case "snow": return "❄️";
    case "mist":
    case "fog":
    case "haze": return "🌫️";
    case "tornado": return "🌪️";
    default: return "🌍";
  }
};

const Background = ({ condition, children }) => {
  return (
    <div
      className="flex justify-center items-center h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${getBackgroundImage(condition)})`,
      }}
    >
      {children}
    </div>
  );
};

export default Background;
