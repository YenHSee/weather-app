import React, { useEffect, useState } from "react";
import "./App.css";
import InputSearch from "./components/InputSearch/index";
import { WeatherData, HistoryData } from "./interface/index";
import WeatherDetail from "./pages/weather/index";
import getFormattedWeatherData from "./services/weatherService";
import ChangeTheme from "./components/changeTheme/index";
import useDarkMode from "./hook/darkMode/index";

function App() {
  const [query, setQuery] = useState("");
  const [historyList, setHistoryList] = useState(Array<HistoryData>);
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isDarkMode, changeDarkMode] = useDarkMode();

  useEffect(() => {
    fetchWeather();
  }, [query]);

  const fetchWeather = async () => {
    if (!query.trim()) return;
    setLoading(true);
    setError(null);
    try {
      const data = await getFormattedWeatherData(query);
      setWeather(data);
      setHistoryData(data);
    } catch (err) {
      setError(err.message);
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  const setHistoryData = (data: WeatherData) => {
    const historyData: HistoryData = {
      id: data.id,
      name: data.name,
      country: data.country,
      timeNow: data.timeNow,
    };
    setHistoryList((prevData) => [...prevData, historyData]);
  };

  return (
    <div className="weatherApp">
      <ChangeTheme isDarkMode={isDarkMode} changeDarkMode={changeDarkMode} />
      <InputSearch query={query} setQuery={setQuery} />

      {loading && (
        <div className="mb-10 text-center text-black dark:text-white  ">
          <p>Loading weather data...</p>
        </div>
      )}

      {error && (
        <div className="mb-10 rounded-xl bg-red-500/20 p-4 text-center text-red-200">
          <p>{error}</p>
        </div>
      )}

      <WeatherDetail
        todayWeather={weather}
        historyList={historyList}
        setHistoryList={setHistoryList}
        setQuery={setQuery}
        isDarkMode={isDarkMode}
      />
    </div>
  );
}

export default App;
