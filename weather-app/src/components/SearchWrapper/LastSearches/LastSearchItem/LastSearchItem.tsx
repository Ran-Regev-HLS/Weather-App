import { WeatherType } from "../../../../types";
import { useContext } from "react";
import SearchContext from "../../SearchContext";
import { ClickableDiv, LastSearchItemContainer } from "./styles";


type LastSearchItemProps = {
  item: WeatherType;
};

export default function LastSearchItem({ item }: LastSearchItemProps) {
  const searchContext = useContext(SearchContext);
  if (!searchContext) {
    throw new Error("LastSearches must be used within a SearchProvider.");
  }

  const {handleListItemCLicked} = searchContext
  
  
  
  return (
    <LastSearchItemContainer >
      <ClickableDiv onClick={()=>{handleListItemCLicked(item) }}>{item.city + ", " + item.country}</ClickableDiv> <div>{item.temperature}°</div>
    </LastSearchItemContainer>
  );
}
