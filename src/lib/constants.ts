const LOCAL_STORAGE_KEY = "tasks";

const API_URL = (lat: number, long: number) =>
  `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${
    import.meta.env.VITE_WEATHER_API_KEY
  }&units=metric`;

export { LOCAL_STORAGE_KEY, API_URL };
