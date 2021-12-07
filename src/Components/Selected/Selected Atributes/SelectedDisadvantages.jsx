import PropTypes from 'prop-types';

const SelectedDisadvantages = ({ selectedDisadvantagesList }) => (
  <ul>
    {selectedDisadvantagesList.map(({ title }) => {
      return (
        <li className="selected" key={`${title}-selected`} style={{ color: 'brown' }}>
          {title}
        </li>
      );
    })}
  </ul>
);

SelectedDisadvantages.propTypes = {
  selectedDisadvantagesList: PropTypes.array
};

export default SelectedDisadvantages;
