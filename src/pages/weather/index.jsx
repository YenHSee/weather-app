import React, { useEffect, useState } from "react";
import History from "../../components/history/index";
import sunIcon from "../../assets/sun.png";
import cloudIcon from "../../assets/cloud.png";
import "./index.scss";

const WeatherDetail = ({
  todayWeather,
  historyList,
  setHistoryList,
  setQuery,
  isDarkMode,
}) => {
  return (
    <div className="weather_container">
      <div className="weather_info">
        <div className="basic_info">
          <span className="title">Today's Weathers</span>
          <span className="temperature">{todayWeather?.temp}°</span>
          <span className="range">
            <span className="high">H: {todayWeather?.temp_max}°</span>
            <span className="low">L: {todayWeather?.temp_min}°</span>
          </span>
        </div>
        <div className="extra_info">
          <span className="location">
            {todayWeather?.name}, {todayWeather?.country}
          </span>
          <span className="date">{todayWeather?.timeNow}</span>
          <span className="humidity">Humidity: {todayWeather?.humidity}%</span>
          <span className="sunny">{todayWeather?.weather}</span>
        </div>
        <div className="weather_icon">
          <img
            src={isDarkMode ? cloudIcon : sunIcon}
            alt={isDarkMode ? "Cloud" : "Sun"}
          />
          <div>{isDarkMode}</div>
        </div>
      </div>
      <History
        historyList={historyList}
        setHistoryList={setHistoryList}
        setQuery={setQuery}
      />
    </div>
  );
};

export default WeatherDetail;
