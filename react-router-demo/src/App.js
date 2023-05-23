import logo from "./logo.svg";
import "./App.css";
import NewsApp from "./components/News/NewsApp";
import WeatherApp from "./components/Weather/WeatherApp";
import TriviaApp from "./components/Trivia/TriviaApp";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>App</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/weather">Weather App</Link> |{" "}
        <Link to="/news">News App</Link> | <Link to="/trivia">Trivia App</Link>{" "}
        |{" "}
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
