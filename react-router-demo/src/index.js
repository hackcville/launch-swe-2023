import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import WeatherApp from "./components/Weather/WeatherApp";
import NewsApp from "./components/News/NewsApp";
import TriviaApp from "./components/Trivia/TriviaApp";
import Error from "./components/Error";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="weather" element={<WeatherApp />} />
        <Route path="news" element={<NewsApp />} />
        <Route path="trivia" element={<TriviaApp />} />
      </Route>
      <Route path="/weather" element={<WeatherApp />} />
      <Route path="/news" element={<NewsApp />} />
      <Route path="*" element={<Error />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
