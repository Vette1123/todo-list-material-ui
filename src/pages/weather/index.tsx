import CurrentWeather from "components/CurrentWeather";
import { API_URL } from "lib/constants";
import { useEffect, useState } from "react";
import { Weather } from "types/weather";

function WeatherPage() {
  const [currentWeather, setCurrentWeather] = useState<Weather>({} as Weather);
  const [lat, setLat] = useState<number>(0);
  const [lng, setLng] = useState<number>(0);

  const getData = () => {
    const data = fetch(API_URL(lat, lng));

    Promise.all([data])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        setCurrentWeather(weatherResponse);
      })
      .catch(console.log);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude);
      setLng(position.coords.longitude);
    });
  }, []);

  useEffect(() => {
    if (lat && lng) {
      getData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lat, lng]);

  return (
    <div>
      {Object.keys(currentWeather).length !== 0 && (
        <CurrentWeather currentWeather={currentWeather} />
      )}
    </div>
  );
}

export default WeatherPage;
