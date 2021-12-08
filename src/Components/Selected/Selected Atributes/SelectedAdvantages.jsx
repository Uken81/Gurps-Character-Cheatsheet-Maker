import PropTypes from 'prop-types';
import useCharacterStore from '../../../Global State/store';

const SelectedAdvantages = () => {
  const selectedAdvantages = useCharacterStore((state) => state.selectedAdvantages);
  return (
    <ul>
      {selectedAdvantages.map(({ title }) => {
        return (
          <li
            className="selected-advantages"
            key={`${title}-selected`}
            style={{ color: 'seagreen' }}>
            {title}
          </li>
        );
      })}
    </ul>
  );
};

SelectedAdvantages.propTypes = {
  selectedAdvantagesList: PropTypes.array
};

export default SelectedAdvantages;
