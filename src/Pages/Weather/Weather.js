import React, { useState } from 'react';
import useFetch from '../../useFetch';
import WeatherData from './WeatherData';
import CityForm from './CityForm'; // Import the new component

function Weather() {
  const [url, setUrl] = useState("");
  const { data: weatherData, loading } = useFetch(url);

  const getWeatherData = (cityName) => {
    const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
    const newUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
    setUrl(newUrl);
  };

  return (
    <div className="flex flex-col items-center justify-center w-screen min-h-screen text-gray-700 p-10 bg-gradient-to-br from-pink-200 via-purple-200 to-indigo-200">
      <CityForm onSubmit={getWeatherData} />
      
      {loading && <p className="text-gray-700">Loading...</p>}

      {weatherData && <WeatherData data={weatherData} />}
    </div>
  );
}

export default Weather;
