import React, { useState } from 'react';

const CityForm = ({ onSubmit }) => {
  const [cityName, setCityName] = useState("");

  const handleInputChange = (e) => {
    setCityName(e.target.value);
  };

  const handleSubmit = () => {
    if (cityName === "") {
      alert("Please enter a city name!!!");
      return;
    }
    console.log(onSubmit)
    onSubmit(cityName);
  };

  return (
    <div>
      <input
        type="text"
        value={cityName}
        onChange={handleInputChange}
        placeholder="Enter city name"
        className="mb-4 p-2 border border-gray-300 rounded"
      />
      <button 
        onClick={handleSubmit} 
        className="mb-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-700"
      >
        Get Weather
      </button>
    </div>
  );
};

export default CityForm;
