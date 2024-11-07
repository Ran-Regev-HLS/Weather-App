// WeatherDisplayIcon.tsx
import { useContext } from "react";
import Icon from "../global/Icon";
import WeatherContext from "./WeatherContext";
import { WeatherType } from "../../types";
import styled from "styled-components";

const IconContainer = styled.div`
    width: 5rem;
    height: 5rem;
`
function getWeatherIconSrc(currWeather: WeatherType | undefined): string | null {
  let iconCode = "";
  const URL = `https://openweathermap.org/img/wn/`;
  if (!currWeather)
     return null
  else {
    switch (true) {
      case currWeather.type < 300:
        iconCode = "11d";
        break;
      case currWeather.type < 400:
        iconCode = "09d";
        break;
      case currWeather.type < 600:
        iconCode = "10d";
        break;
      case currWeather.type < 700:
        iconCode = "13d";
        break;
      case currWeather.type < 800:
        iconCode = "50d";
        break;
      case currWeather.type == 800:
        iconCode = "01d";
        break;
      case currWeather.type == 801:
        iconCode = "02d";
        break;
      default:
        iconCode = "03d";
        break;
    }
  }

  return URL + iconCode + `@2x.png`;
}

const WeatherDisplayIcon = () => {
  const weatherContext = useContext(WeatherContext);
  if (!weatherContext) {
    throw new Error(
      "WeatherDisplayIcon must be used within a WeatherProvider."
    );
  }
  const { currWeather } = weatherContext;
  const iconSrc = getWeatherIconSrc(currWeather);
  const altText = `${currWeather?.type} weather icon`;

  return (
    <IconContainer>
      {iconSrc && <Icon src={iconSrc} alt={altText} />}
    </IconContainer>
  );
};

export default WeatherDisplayIcon;
