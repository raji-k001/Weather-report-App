import React from "react";

const getBackgroundImage = (temp) => {
  if (temp <= 0) return "/images/freezing.jpg";   // 🧊 Freezing
  if (temp > 0 && temp <= 10) return "/images/cold.jpg";  // 🥶 Cold
  if (temp > 10 && temp <= 20) return "/images/mild.jpg";  // 😊 Mild
  if (temp > 20 && temp <= 30) return "/images/warm.jpg";  // 😎 Warm
  if (temp > 30 && temp <= 38) return "/images/hot.jpg";   // 🥵 Hot
  if (temp > 38) return "/images/extreme.jpg";             // 🌋 Extreme
  return "/images/default.jpg"; 
};


const Background = ({ temp, children }) => {
  return (
    <div
      className="flex justify-center items-center h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${temp !== null ? getBackgroundImage(temp) : "/images/default.jpg"})`,
      }}
    >
      {children}
    </div>
  );
};

export default Background;