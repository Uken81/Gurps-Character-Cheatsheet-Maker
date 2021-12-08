import SelectedAdvantages from './Selected Atributes/SelectedAdvantages';
import SelectedDisadvantages from './Selected Atributes/SelectedDisadvantages';

import './displaySelected.styles.scss';
import { useToggleStore } from '../../Global State/store';

const DisplaySelected = () => {
  const toggleAdvantages = useToggleStore((state) => state.toggleAdvantages);
  const toggleDisadvantages = useToggleStore((state) => state.toggleDisadvantages);

  return (
    <div className="selected-window">
      <div className="selected-list" id="selected-advantages" onClick={toggleAdvantages}>
        <h1 style={{ color: 'seagreen' }}>Selected Advantages</h1>
        <SelectedAdvantages />
      </div>
      <div className="selected-list" id="selected-disadvantages" onClick={toggleDisadvantages}>
        <h1 style={{ color: 'brown' }}>Selected Disadvantages</h1>
        <SelectedDisadvantages />
      </div>
    </div>
  );
};

export default DisplaySelected;
