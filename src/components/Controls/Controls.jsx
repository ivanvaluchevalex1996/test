import Search from "../Search/Search";
import CustomSelect from "../CustomSelect/CustomSelect";
import { useState, useEffect } from "react";
import styled from "styled-components";

const options = [
  { value: "Africa", label: "Africa" },
  { value: "America", label: "America" },
  { value: "Asia", label: "Asia" },
  { value: "Europe", label: "Europe" },
  { value: "Oceania", label: "Oceania" },
];

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media (min-width: 767px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

function Controls() {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");

  return (
    <Wrapper>
      <Search search={search} setSearch={setSearch} />
      <CustomSelect
        // название options зарезервированное, использовать его
        options={options}
        placeholder="Filter by Region"
        isClearable
        isSearchable={false}
        value={region}
        onChange={setRegion}
      />
    </Wrapper>
  );
}

export default Controls;
