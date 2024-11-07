import  { useContext } from "react";

import WeatherContext from "../WeatherContext";
import { TempDisplay } from "./styles";
import { Wrapper } from "../../styles";



const WeatherDisplayDataDisplay = () => {
  const weatherContext = useContext(WeatherContext);

  if (!weatherContext) {
    throw new Error("WeatherDisplayTempDisplay must be used within a WeatherProvider.");
  }

  const { currWeather } = weatherContext;

  return (<Wrapper>{currWeather && <><TempDisplay>{currWeather?.temperature}° <div>{currWeather?.city + ', ' 
    + currWeather?.country}</div></TempDisplay>
  </>}
  </Wrapper>);
};

export default WeatherDisplayDataDisplay;
