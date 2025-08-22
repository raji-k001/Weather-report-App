import React from "react";

const getBackgroundImage = (temp) => {
  if (temp <= 0) return "public/images/freezing.jpg";   
  if (temp >= 1 && temp < 10) return "public/images/cold.jpg"; 
  if (temp >= 10 && temp < 20) return "public/images/mild.jpg"; 
  if (temp >= 20 && temp < 30) return "public/images/warm.jpg";  
  if (temp >= 30 && temp < 38) return "public/images/hot.jpg";   
  if (temp >= 38) return "public/images/extreme.jpg";             
  return "public/images/default.jpg";
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