import SelectedAdvantages from './Selected Atributes/SelectedAdvantages';
import SelectedDisadvantages from './Selected Atributes/SelectedDisadvantages';

import './displaySelected.styles.scss';
import { useContext } from 'react';
import { IsChoosingAdvantagesContext } from '../../context';

const DisplaySelected = () => {
  const { setIsChoosingAdvantages } = useContext(IsChoosingAdvantagesContext);

  return (
    <div className="selected-window">
      <div
        className="selected-list"
        id="selected-advantages"
        onClick={() => setIsChoosingAdvantages(true)}>
        <h1 style={{ color: 'seagreen' }}>Selected Advantages</h1>
        <SelectedAdvantages />
      </div>
      <div
        className="selected-list"
        id="selected-disadvantages"
        onClick={() => setIsChoosingAdvantages(false)}>
        <h1 style={{ color: 'brown' }}>Selected Disadvantages</h1>
        <SelectedDisadvantages />
      </div>
    </div>
  );
};

export default DisplaySelected;
