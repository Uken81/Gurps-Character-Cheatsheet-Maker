import PropTypes from 'prop-types';
import useCharacterStore from '../../../Global State/store';

const SelectedDisadvantages = () => {
  const selectedDisadvantages = useCharacterStore((state) => state.selectedDisadvantages);
  return (
    <ul>
      {selectedDisadvantages.map(({ title }) => {
        return (
          <li className="selected" key={`${title}-selected`} style={{ color: 'brown' }}>
            {title}
          </li>
        );
      })}
    </ul>
  );
};

SelectedDisadvantages.propTypes = {
  selectedDisadvantagesList: PropTypes.array
};

export default SelectedDisadvantages;
