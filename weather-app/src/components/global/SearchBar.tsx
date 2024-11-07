import styled from "styled-components";
import { useContext } from "react";
import SearchContext from "../SearchWrapper/SearchContext";

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0.5rem;
`;

const SearchBox = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: white;
  width: 100%;
`;

const SearchInput = styled.input`
  border: none;
  outline: none;
  padding: 0.5rem;
  color: #333;
  flex-grow: 1;
`;

const SearchButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  padding: 0.5rem;
  border: none;
  background-color: white;
  cursor: pointer;
  &:active {
    background-color: #ddd;
  }
`;

type SearchBarProps = {
  showButton?: boolean;
  onSubmit: (value: string) => void;
};

export default function SearchBar({
  showButton = true,
  onSubmit,
}: SearchBarProps) {
  const searchContext = useContext(SearchContext);

  if (!searchContext) {
    throw new Error("SearchBar must be used within a SearchProvider");
  }

  const { searchInput, setSearchInput } = searchContext;

  return (
    <SearchContainer>
      <SearchBox>
        <SearchInput
          value={searchInput}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchInput(e.target.value)}
          placeholder="Search..."
        />
        {showButton && (
          <SearchButton onClick={() => onSubmit(searchInput)}>🔍</SearchButton>
        )}
      </SearchBox>
    </SearchContainer>
  );
}
