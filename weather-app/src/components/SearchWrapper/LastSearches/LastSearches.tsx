import { useContext } from "react";
import SearchContext from "../SearchContext.tsx";
import LastSearchItem from "./LastSearchItem/LastSearchItem.tsx";
import { LastSearchesContainer } from "./styles.ts";

export default function LastSearches() {
  
  const searchContext = useContext(SearchContext);
  
  if (!searchContext) {
    throw new Error("SearchWrapper must be used within a SearchProvider.");
  }

  const {  searchItems } =
    searchContext;
  return (
    <LastSearchesContainer>
      {searchItems.map((item, index) => (
        <LastSearchItem key={index} item={item}/>
      ))}
    </LastSearchesContainer>
  );
}
