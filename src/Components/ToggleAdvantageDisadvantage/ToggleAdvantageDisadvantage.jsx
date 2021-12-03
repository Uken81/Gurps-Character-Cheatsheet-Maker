import { useContext, useEffect } from 'react';
import { IsChoosingAdvantagesContext } from '../../context';
import './Toggle.styles.scss';

import { Tab, Tabs } from 'react-bootstrap';

const ToggleAdvantageDisadvantage = () => {
  const { isChoosingAdvantages, setIsChoosingAdvantages } = useContext(IsChoosingAdvantagesContext);

  useEffect(() => {
    setIsChoosingAdvantages(true);
  }, []);

  const handleTabs = (key) => {
    key === 'advantages' ? setIsChoosingAdvantages(true) : setIsChoosingAdvantages(false);
  };

  return (
    <div className="toggle-container">
      <Tabs
        defaultActiveKey="advantages"
        activeKey={isChoosingAdvantages ? 'advantages' : 'disadvantages'}
        className="toggle-advantages-disadvantages"
        onSelect={handleTabs}>
        <Tab
          style={{ backgroundColor: 'red' }}
          eventKey="choose-from"
          className="tab-disabled"
          title="Choose From"
          disabled
        />
        <Tab eventKey="advantages" title="Advantages" />
        <Tab eventKey="disadvantages" title="Disadvantages" />
      </Tabs>
    </div>
  );
};

export default ToggleAdvantageDisadvantage;
