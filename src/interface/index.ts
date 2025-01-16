export interface WeatherData {
  name?: string;
  temp?: string;
  temp_min?: string;
  temp_max?: string;
  humidity?: string;
  country?: string;
  timeNow?: string;
  weather?: string;
  id: number;
}

export interface HistoryData {
  id: number;
  name?: string;
  country?: string;
  timeNow?: string;
}
