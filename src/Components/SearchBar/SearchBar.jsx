import { useContext } from "react";
import { useEffect, useState } from "react";
import Select from "react-select";
import AdvantagesArray from "../../Attribute Objects/Advantages/Advantages";
import DisadvantagesArray from "../../Attribute Objects/Disadvantages/Disadvantages";
import {
  CharacterNameContext,
  IsChoosingAdvantagesContext,
  SelectedAdvantagesContext,
  SelectedDisadvantagesContext,
  SelectInputValueContext,
} from "../../context";
import ToggleAdvantageDisadvantage from "../ToggleAdvantageDisadvantage/ToggleAdvantageDisadvantage";

import "./SearchBar.styles.scss";

const SearchBar = () => {
  const [advantageOptions, setAdvantageOptions] = useState([]);
  const [disadvantageOptions, setDisadvantageOptions] = useState([]);

  const { IsChoosingAdvantages } = useContext(IsChoosingAdvantagesContext);
  const { selectedAdvantagesList, setSelectedAdvantagesList } = useContext(
    SelectedAdvantagesContext
  );
  const { selectedDisadvantagesList, setSelectedDisadvantagesList } =
    useContext(SelectedDisadvantagesContext);
  const { selectInput, setSelectInput } = useContext(SelectInputValueContext);
  const { characterName } = useContext(CharacterNameContext);

  useEffect(() => {
    const createSearchOptions = () => {
      console.log("***Test: createSearchOptions");
      let adsArr = AdvantagesArray.map((opt) => ({
        label: opt.title,
        value: opt,
        category: opt.type,
      }));
      let disadsArr = DisadvantagesArray.map((opt) => ({
        label: opt.title,
        value: opt,
        category: opt.type,
      }));
      setAdvantageOptions(adsArr);
      setDisadvantageOptions(disadsArr);
    };
    createSearchOptions();
  }, []);

  const handleChange = (event) => {
    setSelectInput(event.value);
    let adsArr = [];
    let disadsArr = [];
    console.log(event);
    event.forEach((e) => {
      e.value.type === "advantage"
        ? adsArr.push(e.value)
        : disadsArr.push(e.value);
    });
    setSelectedAdvantagesList(adsArr);
    setSelectedDisadvantagesList(disadsArr);
  };

  useEffect(() => {
    const updateSelect = () => {
      let adsArr = selectedAdvantagesList.map((adv) => ({
        label: adv.title,
        value: adv,
        category: adv.type,
      }));

      let disadsArr = selectedDisadvantagesList.map((disad) => ({
        label: disad.title,
        value: disad,
        category: disad.type,
      }));

      let combinedArr = [...adsArr, ...disadsArr];
      console.log("combined: ", combinedArr);
      setSelectInput(combinedArr);
    };
    updateSelect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedAdvantagesList, selectedDisadvantagesList]);

  const formatOptionLabel = ({ label, category }) => (
    <div
      style={category === "advantage" ? { color: "green" } : { color: "red" }}
    >
      {label}
    </div>
  );

  return (
    <div className="searchbar-container">
      {characterName === "" ? (
        <h1>
          Select your Characters{" "}
          {IsChoosingAdvantages ? "ADVANTAGES" : "DISADVANTAGES"}
        </h1>
      ) : (
        <h1>
          SELECT {characterName.toUpperCase()}'S{" "}
          {IsChoosingAdvantages ? "ADVANTAGES" : "DISADVANTAGES"}
        </h1>
      )}
      <ToggleAdvantageDisadvantage />
      <Select
        className="searchBar"
        options={IsChoosingAdvantages ? advantageOptions : disadvantageOptions}
        value={selectInput}
        isMulti
        onChange={handleChange}
        formatOptionLabel={formatOptionLabel}
      />
    </div>
  );
};

export default SearchBar;
