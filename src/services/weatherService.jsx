import moment from "moment";
import { API_KEY, API_URL } from "../config/index";

const getWeatherData = async (searchParams) => {
  const url = new URL(API_URL);
  url.search = new URLSearchParams({
    q: searchParams,
    appid: API_KEY,
    units: "metric",
  });

  const response = await fetch(url);
  const responseData = await response.json();
  const data = {
    status: response.ok,
    data: responseData,
  };
  return data;
};

const formatCurrentWeather = (data) => {
  const {
    main: { temp, temp_min, temp_max, humidity },
    name,
    sys: { country },
  } = data;

  const timeNow = moment(new Date()).format("DD-MM-YYYY hh:mm A");
  const weather = data.weather[0].main;
  const id = moment().unix();

  return {
    temp,
    temp_min,
    temp_max,
    humidity,
    name,
    country,
    timeNow,
    weather,
    id,
  };
};

const getFormattedWeatherData = async (searchParams) => {
  const { data, status } = await getWeatherData(searchParams);
  if (status) {
    const todayWeather = formatCurrentWeather(data);
    return { ...todayWeather };
  } else {
    throw data;
  }
};

export default getFormattedWeatherData;
