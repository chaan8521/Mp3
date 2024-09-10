import React, { useState } from 'react';

const FlightForm = ({ onSubmit }) => {
  const [city, setCity] = useState('');

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleSearch = () => {
    if (city === "") {
      alert("Please enter a city code!!!");
      return;
    }
    onSubmit(city);
  };

  return (
    <div className="w-full max-w-sm">
      <input
        type="text"
        value={city}
        onChange={handleInputChange}
        placeholder="Enter city code (e.g., LAX)"
        className="mb-4 p-2 border border-gray-300 rounded w-full"
      />
      <div className="flex justify-center"> 
        <button 
          onClick={handleSearch} 
          className="mb-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Get Flights
        </button>
      </div>
    </div>
  );
};

export default FlightForm;
