import { useEffect, useState } from "react";
import Search from "./Components/Search";
import LocationInfo from "./Components/LocationInfo";
import Map from "./Components/Map";

function App() {
  const [locationData, setLocationData] = useState(null);

  useEffect(() => {
    async function getData() {
      const response = await fetch("https://api.ipify.org/?format=json");
      const data = await response.json();
      fetchData(data.ip);
    }

    getData();
  }, []);

  async function fetchData(ipAddress) {
    const response = await fetch(
      `
https://geo.ipify.org/api/v2/country,city?apiKey=${
        import.meta.env.VITE_IP_GEO_API_KEY
      }&ipAddress=${ipAddress}`
    );

    const { ip, isp, location } = await response.json();
    setLocationData({ ip, isp, location });
  }

  function handleOnFormSubmit(e) {
    e.preventDefault();
    fetchData(e.target.ipaddress.value);
  }

  return (
    <>
      <Search handleOnFormSubmit={handleOnFormSubmit} />
      {locationData && (
        <>
          <LocationInfo locationData={locationData} />
          <Map locationData={locationData.location} />
        </>
      )}
    </>
  );
}

export default App;
