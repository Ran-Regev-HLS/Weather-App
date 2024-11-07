import SearchBar from "../global/SearchBar";
import LastSearches from "./LastSearches/LastSearches";
import WeatherContext from "../WeatherDisplay/WeatherContext";
import { useContext, useEffect } from "react";
import axios from "axios";
import SearchContext from "./SearchContext";
import {Wrapper} from "../styles"

const API_KEY = "8ea37c4827e65d0e0131ca941c43e4af";


type setUserCurrentLocationType = {
  setSearchInput: (input: string) => void;
  setCurrentCity: (input: string) => void;
};

function setUserCurrentLocation({
  setSearchInput,
  setCurrentCity,
}: setUserCurrentLocationType) {
  if (navigator.geolocation) {
    navigator.permissions.query({ name: "geolocation" }).then((result) => {
      try {
        if (result.state === "granted" || result.state === "prompt") {
          navigator.geolocation.getCurrentPosition(async (position) => {
            const { latitude, longitude } = position.coords;
            try {
              const response = await axios.get(
                `https://api.openweathermap.org/geo/1.0/reverse`,
                {
                  params: {
                    lat: latitude,
                    lon: longitude,
                    appid: API_KEY,
                  },
                }
              );
              const city = response.data[0]?.name;
              setSearchInput(city);
              setCurrentCity(city);
            } catch (error) {
              console.error("Error fetching city name: ", error);
            }
          });
        }
      } catch (e) {
        console.log("couldnt get user location");
      }
    });
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
}


export default function SearchWrapper() {
  const weatherContext = useContext(WeatherContext);
  const searchContext = useContext(SearchContext);

  if (!weatherContext) {
    throw new Error("SearchWrapper must be used within a WeatherProvider.");
  }
  if (!searchContext) {
    throw new Error("SearchWrapper must be used within a SearchProvider.");
  }

  const {  setSearchItems,setSearchInput, currentCity, setCurrentCity } =
    searchContext;

  const { fetchWeather } = weatherContext;

  useEffect(() => {
    setUserCurrentLocation({ setSearchInput, setCurrentCity });
  }, []);

  useEffect(() => {
    handleSearch(currentCity);
  }, [currentCity]);

  const handleSearch = async (city: string) => {
    if (city !== "") {
      const currWeather = await fetchWeather(city);
      setSearchItems((prev) => {
        const filteredItems = prev.filter((item) => item.city !== currWeather.city);
        return [currWeather, ...filteredItems];});
    }
  };

  return (
    <Wrapper>
      <SearchBar onSubmit={(value: string) => setCurrentCity(value)} />
      <LastSearches />
    </Wrapper>
  );
}
