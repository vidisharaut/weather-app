import "./App.css";

const api = {
  key: "04ba21e02c8750e703c5b352bde4e3b9",
  base: "https://api.openweather.org/data/2.5/",
};

function App() {
  return (
    <div className="App">
      <main>
        <div className="search-box">
          <input type="text" className="search-bar" placeholder="Search..." />
        </div>
      </main>
    </div>
  );
}

export default App;
