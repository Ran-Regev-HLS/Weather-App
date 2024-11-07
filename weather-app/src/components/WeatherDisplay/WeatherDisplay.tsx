import WeatherDisplayIcon from "./WeatherDisplayIcon";
import WeatherDisplayDataDisplay from "./WeatherDisplayDataDisplay/WeatherDisplayDataDisplay";
import { useContext } from "react";
import WeatherContext from "./WeatherContext";
import { Container } from "./styles";
import { Wrapper } from "../styles";



const WeatherDisplay = () => {
  const weatherContext = useContext(WeatherContext);
  if (!weatherContext) {
    throw new Error("WeatherDisplay must be used within a WeatherProvider.");
  }
  const { currCity ,isLoading, isError } = weatherContext;

  return (
    <Wrapper>
      <Container>
        {currCity ===''? <p>Enter City</p>:isLoading ? (
          <p>Loading...</p>
        ) : isError ? (
          <p>Error fetching weather data.</p>
        ) : (
          <>
            <WeatherDisplayIcon />
            <WeatherDisplayDataDisplay />
          </>
        )}
      </Container>
    </Wrapper>
  );
};

export default WeatherDisplay;
