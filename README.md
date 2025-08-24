# 🌦️ Weather-Report-App

A simple and responsive Weather App built with **React.js**, **Tailwind CSS**, and the **OpenWeather API**.

## ✨ Features

- ✅ **Search weather by city**
- ✅ **Show weather details:** temperature, humidity, description, wind, etc.
- ✅ **Animated weather emoji** under the search box
- ✅ **Dynamic background images** according to weather conditions (Clear, Rain, Clouds, Snow, Mist, etc.)

## 🚀 Live Demo

👉 **[View on Vercel](#)**  
      https://weather-report-ntwkfn6an-rajeshwari-s-projects-93938ac7.vercel.app
---

## 🛠️ Tech Stack

- **React.js** – frontend framework
- **Tailwind CSS** – styling
- **Axios** – API requests
- **OpenWeather API** – real-time weather data
- **Vercel** – deployment

---

## 📂 Project Structure

```
src/
 ┣ components/
 ┃ ┣ Background.jsx      # Dynamic backgrounds
 ┃ ┣ Search.jsx          # Search input + button
 ┃ ┣ WeatherApp.jsx      # Main logic
 ┃ ┗ WeatherCard.jsx     # Weather info display
 ┣ App.js
 ┗ index.js
public/
 ┣ images/               # Background images (clear, rain, snow, etc.)
```

---

## ⚙️ Setup Instructions

1. **Clone the repo**

    ```bash
    git clone https://github.com/your-username/weather-app.git
    cd weather-app
    ```

2. **Install dependencies**

    ```bash
    npm install
    ```

3. **Get API Key from OpenWeather**

    - Sign up at [OpenWeather](https://openweathermap.org/)
    - Copy your API key

4. **Set the API key**

    - In `src/components/WeatherApp.jsx`, replace:

      ```js
      const API_KEY = "YOUR_API_KEY_HERE";
      ```

      with your API key.

5. **Run locally**

    ```bash
    npm run dev
    ```

6. **Build for production**

    ```bash
    npm run build
    ```

---

## 🌍 Deployment (Vercel)

1. **Push your project to GitHub**
2. Go to [Vercel](https://vercel.com/)
3. Start a **New Project** → **Import GitHub Repo**
4. Click **Deploy 🚀**

---

> **Made with ❤️ using React, Tailwind CSS, and OpenWeather API**
