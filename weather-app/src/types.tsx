export type WeatherType = {
    city: string;
    country: string;
    temperature: number;
    type: number;
  };
  
  export type WeatherContextType = {
    currWeather: WeatherType | undefined;
    isLoading: boolean;
    isError: boolean;
    fetchWeather: (city: string) => Promise<WeatherType>;
    currCity: string;
  };
  
  
 