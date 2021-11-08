import { useContext } from "react";
import {
  SelectedAdvantagesContext,
  SelectedDisadvantagesContext,
} from "../../context";

export const ResetCharacterAttributes = () => {
  const { setSelectedAdvantagesList } = useContext(SelectedAdvantagesContext);
  const { setSelectedDisadvantagesList } = useContext(SelectedDisadvantagesContext);


    setSelectedAdvantagesList([]);
    setSelectedDisadvantagesList([]);

};
