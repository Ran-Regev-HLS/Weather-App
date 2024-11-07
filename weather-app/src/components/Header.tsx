import styled from "styled-components";
import Icon from "./global/Icon";
const Title = styled.h1`
  text-align: center;
  color: white;
  padding: 20px 0;
  font-size: 3rem;
  line-height: 2rem;
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3.5rem;  
  height: 3.5rem; 
  margin-right: 0.5rem;
`;

export default function Header() {
  return (
    <HeaderContainer>
      <IconContainer>
        <Icon src="../src/assets/weather.png" alt="weather app icon" />
      </IconContainer>
      <Title>Weather App</Title>
    </HeaderContainer>
  );
}
