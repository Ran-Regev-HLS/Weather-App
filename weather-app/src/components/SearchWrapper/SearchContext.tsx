import { createContext, useState, ReactNode } from "react";
import { WeatherType } from "../../types";

type SearchContextType = {
  searchInput: string;
  setSearchInput: (input: string) => void;
  currentCity:string;
   setCurrentCity: (input: string) => void;
   searchItems:WeatherType[];
   setSearchItems:React.Dispatch<React.SetStateAction<WeatherType[]>>;
   handleListItemCLicked: (item: WeatherType) => void;
};

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const SearchProvider = ({ children }: { children: ReactNode }) => {
  const [searchInput, setSearchInput] = useState<string>("");
  const [currentCity,setCurrentCity] = useState<string>("");
  const [searchItems, setSearchItems] = useState<WeatherType[]>([]);
  function handleListItemCLicked(item: WeatherType){
    setCurrentCity(item.city); 
    setSearchInput(item.city);
  }

  return (
    <SearchContext.Provider value={{ searchInput, setSearchInput, currentCity,setCurrentCity, searchItems, setSearchItems, handleListItemCLicked }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContext;
