import { useState } from "react";
import "./App.css";

const api = {
  key: "3a67ff9c21dfbfc49902129cbd455db0",
  base: "api.openweathermap.org/data/2.5/",
};

function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});
  const [city, setCity] = useState("Mumbai");
  const [country, setCountry] = useState("IN");
  const [temp, setTemp] = useState("Smoke");
  const [climate, setClimate] = useState("smoke");

  const search = (evt) => {
    if (evt.key === "Enter") {
      const currentWeather = fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=${api.key}`
      )
        .then((res) => res.json())
        .then((json) => setWeather(json));
      setQuery("");
      console.log(weather);
      console.log(weather.name);
    }
  };

  const dateBuilder = (d) => {
    let months = [
      "Jan",
      "Feb",
      "March",
      "April",
      "May",
      "June",
      "July",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ];
    let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };

  return (
    <div
      className={
        typeof weather.main != "undefined"
          ? weather.main.temp > 16
            ? "App warm"
            : "App"
          : "App"
      }
    >
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search..."
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
        {typeof weather.main != "undefined" ? (
          <div>
            <div className="location-box">
              <div className="location">
                {weather.name}, {weather.sys.country}
              </div>
              <div className="date">{dateBuilder(new Date())}</div>
            </div>
            <div className="weather-box">
              <div className="temp">{Math.round(weather.main.temp)}ºC</div>
              <div className="weather">{weather.weather[0].main}</div>
            </div>
          </div>
        ) : (
          <h2 className="suggestion">Try searching Mumbai...</h2>
        )}
      </main>
    </div>
  );
}

export default App;
