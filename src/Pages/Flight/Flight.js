import React, { useState } from 'react';
import FlightData from './FlightData';
import FlightForm from './FlightForm';
import useFetch from '../../useFetch';

const Flight = () => {
  const [url, setUrl] = useState('');
  const { data, loading } = useFetch(url);

  const getFlightData = (city) => {
    const apiKey = process.env.REACT_APP_FLIGHT_API_KEY;
    const apiUrl = `http://api.aviationstack.com/v1/flights?access_key=${apiKey}&dep_iata=${city}`;
    setUrl(apiUrl);
  };

  return (
    <div className="pt-24 flex flex-col items-center justify-center w-screen min-h-screen text-gray-700 p-10 bg-gradient-to-br from-pink-200 via-purple-200 to-indigo-200">
      <FlightForm onSubmit={getFlightData} /> {/* Use the FlightForm component */}

      {loading && <p className="text-gray-700">Loading...</p>}

      <div className="flights-list space-y-4 max-w-screen-lg overflow-y-auto">
        {data && data.data && data.data.length > 0 ? (
          data.data.map((flight, index) => (
            <FlightData key={`${flight.flight?.iata}-${index}`} flight={flight} />
          ))
        ) : (
          <p>No flights found.</p>
        )}
      </div>
    </div>
  );
};

export default Flight;
