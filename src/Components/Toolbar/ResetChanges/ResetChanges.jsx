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
  };

  return (
    <div>
      <Button onClick={handleClick} size="lg">
        Reset Changes
      </Button>
      <button
        onClick={() =>
          console.log(
            "ads, dads, initselect, select ",
            initialAdvantages,
            initialDisadvantages,
            initalSelect,
            selectInput
          )
        }
      >
        cons
      </button>
    </div>
  );
};

export default ResetChanges;