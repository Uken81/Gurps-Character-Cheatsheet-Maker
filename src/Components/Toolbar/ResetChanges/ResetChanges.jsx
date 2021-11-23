import { useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import {
  SelectedAdvantagesContext,
  SelectedDisadvantagesContext,
  SelectInputValueContext,
} from "../../../context";

const ResetChanges = () => {
  const { selectInput, setSelectInput } = useContext(SelectInputValueContext);
  const { selectedAdvantagesList, setSelectedAdvantagesList } = useContext(
    SelectedAdvantagesContext
  );
  const { selectedDisadvantagesList, setSelectedDisadvantagesList } =
    useContext(SelectedDisadvantagesContext);

  const [initialAdvantages, setInitialAdvantages] = useState([]);
  const [initialDisadvantages, setInitialDisadvantages] = useState([]);
  const [initalSelect, setInitialSelect] = useState([]);

  useEffect(() => {
    setInitialAdvantages(selectedAdvantagesList);
    setInitialDisadvantages(selectedDisadvantagesList);
    setInitialSelect(selectInput);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = async () => {
    setSelectedAdvantagesList(initialAdvantages);
    setSelectedDisadvantagesList(initialDisadvantages);
    setSelectInput(initalSelect);
    console.log('test')
  };

  const con = () => {
    console.log('initialselect: ', initalSelect)
    console.log('select: ', selectInput)
  }

  return (
    <div>
      <Button className="tool-button" onClick={handleClick} size="lg">
        Reset Changes
      </Button>
      <button onClick={con}>con</button>
    </div>
  );
};

export default ResetChanges;