function FlightData({ flight }) {
  if (!flight || !flight.flight) {
    console.log("Flight data is undefined or does not contain expected properties:", flight);
    return <p>No flight data available.</p>; 
  }

  return (
    <div className="w-full max-w-screen-sm bg-white p-10 rounded-xl ring-8 ring-white ring-opacity-40">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <span className="text-2xl font-bold">Flight: {flight.flight.iata}</span>
          <span className="font-semibold mt-1 text-gray-500">From: {flight.departure?.iata} ({flight.departure?.airport})</span>
          <span className="font-semibold mt-1 text-gray-500">To: {flight.arrival?.iata} ({flight.arrival?.airport})</span>
          <span className="font-semibold mt-1 text-gray-500">Departure Time: {flight.departure?.scheduled}</span>
          <span className="font-semibold mt-1 text-gray-500">Arrival Time: {flight.arrival?.scheduled}</span>
          <span className={`font-semibold mt-1 ${flight.flight_status === 'active' ? 'text-green-500' : 'text-red-500'}`}>
            Status: {flight.flight_status}
          </span>
        </div>
        <svg className="h-24 w-24 fill-current text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
  <path d="M2 17.75v2.5h2.5v-2.5H2zm5 0v2.5h2.5v-2.5H7zm5 0v2.5h2.5v-2.5H12zm5 0v2.5h2.5v-2.5H17zm.59-6.36L12 11.25v4.5c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-4.5l-5.59-.86a.99.99 0 0 1-.71-.64.999.999 0 0 1 .09-.81c.18-.31.52-.48.87-.43l3.56.53V7.5c0-.55.45-1 1-1s1 .45 1 1v2.88l3.56-.53c.35-.05.69.12.87.43.18.31.19.7.09.81-.15.28-.44.49-.71.64zM18 4h-1V2.5c0-.28-.22-.5-.5-.5h-9c-.28 0-.5.22-.5.5V4H6c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1z" />
</svg>
      </div>
    </div>
  );
}
export default FlightData;