import Header from "./components/Header";
import GlobalStyle from "./GlobalStyle";
import SearchWrapper from "./components/SearchWrapper/SearchWrapper";
import { WeatherProvider } from "./components/WeatherDisplay/WeatherContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import WeatherDisplay from "./components/WeatherDisplay/WeatherDisplay";
import styled from "styled-components";
import { SearchProvider } from "./components/SearchWrapper/SearchContext";

const AppWrapper = styled.div`
  width: 90%;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppWrapper>
        <WeatherProvider>
          <GlobalStyle />
          <Header />
          <SearchProvider>
            <SearchWrapper />
          </SearchProvider>
          <WeatherDisplay />
        </WeatherProvider>
      </AppWrapper>
    </QueryClientProvider>
  );
}

export default App;
