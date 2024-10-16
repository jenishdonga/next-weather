import Image from "next/image";

import "./page.css"
import { SearchSection } from "./Components/SearchSection";
import CurrentWeather from "./Components/CurrentWeather";
import HourlyWeatherItem from "./Components/HourlyWeatherItem";

export default function Home() {
  return (
    <div className="containter">
      <SearchSection />
      <div className="weather-seciton">
        <CurrentWeather/>
        <div className="hourly-forecast">
          <ul className="weather-list">
              <HourlyWeatherItem/>
          </ul>
        </div>
      </div>
    </div>
  );
}
