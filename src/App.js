import "./App.css";
import Weather from "./Weather";
import WeeklyForecast from "./WeeklyForecast";
import SearchEngineer from "./SearchEngineer";
import "./SearchEngineer.css";
import "./WeeklyForecast.css";
import "./Weather.css";

function App() {
  return (
    <div class="container">
      <div class="weatherApp">
        <p> Hola hola</p>
        <SearchEngineer />
        <Weather />
        <WeeklyForecast />
      </div>
    </div>
  );
}

export default App;
