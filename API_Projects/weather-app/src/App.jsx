import { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";

export default function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

  const fetchWeather = async (city) => {
    try {
      setLoading(true);
      setError("");

      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );

      if (!res.ok) throw new Error("City not found");

      const data = await res.json();
      setWeather(data);
    } catch (err) {
      setError(err.message);
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 to-indigo-600 flex flex-col items-center justify-center p-4">
      <h1 className="text-white text-3xl font-bold mb-6">
        🌦️ Weather App
      </h1>

      <SearchBar onSearch={fetchWeather} />

      {loading && <p className="text-white">Loading...</p>}
      {error && <p className="text-red-200">{error}</p>}

      <WeatherCard data={weather} />
    </div>
  );
}