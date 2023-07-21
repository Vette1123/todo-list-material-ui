import { Weather } from "types/weather";
import styles from "./current-weather.module.css";

const CurrentWeather = ({ currentWeather }: { currentWeather: Weather }) => {
  return (
    <div className={styles.weather}>
      <div className={styles.top}>
        <div>
          <p className={styles.city}>{currentWeather.name}</p>
          <p className={styles["weather-description"]}>
            {currentWeather.weather[0].description}
          </p>
        </div>
        <img
          alt="weather"
          className={styles["weather-icon"]}
          src={`icons/${currentWeather.weather[0].icon}.png`}
        />
      </div>
      <div className={styles.bottom}>
        <p className={styles.temperature}>
          {Math.round(currentWeather.main.temp)}°C
        </p>
        <div className={styles.details}>
          <div className={styles["parameter-row"]}>
            <span className={styles["parameter-label"]}>Details</span>
          </div>
          <div className={styles["parameter-row"]}>
            <span className={styles["parameter-label"]}>Feels like</span>
            <span className={styles["parameter-value"]}>
              {Math.round(currentWeather.main.feels_like)}°C
            </span>
          </div>
          <div className={styles["parameter-row"]}>
            <span className={styles["parameter-label"]}>Wind</span>
            <span className={styles["parameter-value"]}>
              {currentWeather.wind.speed} m/s
            </span>
          </div>
          <div className={styles["parameter-row"]}>
            <span className={styles["parameter-label"]}>Humidity</span>
            <span className={styles["parameter-value"]}>
              {currentWeather.main.humidity}%
            </span>
          </div>
          <div className={styles["parameter-row"]}>
            <span className={styles["parameter-label"]}>Pressure</span>
            <span className={styles["parameter-value"]}>
              {currentWeather.main.pressure} hPa
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
