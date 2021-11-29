import "./App.css";

const api = {
  key: "04ba21e02c8750e703c5b352bde4e3b9",
  base: "https://api.openweather.org/data/2.5/",
};

function App() {
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
    <div className="App">
      <main>
        <div className="search-box">
          <input type="text" className="search-bar" placeholder="Search..." />
        </div>
        <div className="location-box">
          <div className="location">Mumbai, India</div>
          <div className="date">{dateBuilder(new Date())}</div>
        </div>
        <div className="weather-box">
          <div className="temp">15ºC</div>
          <div className="weather">Cold</div>
        </div>
      </main>
    </div>
  );
}

export default App;
