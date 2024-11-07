import { createContext, ReactNode, useCallback, useState } from "react";
import { WeatherContextType, WeatherType } from "../../types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const API_KEY = '8ea37c4827e65d0e0131ca941c43e4af';
const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

const WeatherContext = createContext<WeatherContextType | undefined>(undefined);

const fetchWeatherData = async (city: string): Promise<WeatherType> => {
  const response = await axios.get(API_URL, {
    params: {
      q: city,
      appid: API_KEY,
      units: "metric",
    },
  });
  return {
    city: response.data.name,
    country: response.data.sys.country,
    temperature: response.data.main.temp,
    type: response.data.weather[0].id,
  };
};

export const WeatherProvider = ({ children }: { children: ReactNode }) => {
  const [currCity, setCurrCity] = useState<string>("");

  const fetchWeather = useCallback(
    async (city: string) => {
      setCurrCity(city);
      return await fetchWeatherData(city);
    },
    []
  );

  const { data: currWeather, isLoading, isError } = useQuery({
    queryKey: ['weather', currCity],
    queryFn: () => (currCity ? fetchWeatherData(currCity) : Promise.reject("No city provided")),
    enabled: !!currCity, 
    retry: false, 
  });

  return (
    <WeatherContext.Provider
      value={{ currWeather, isLoading, isError, fetchWeather, currCity }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherContext;


