import { useEffect } from 'react';

import './Toggle.styles.scss';

import { Tab, Tabs } from 'react-bootstrap';
import { useToggleStore } from '../../Global State/store';

const ToggleAdvantageDisadvantage = () => {
  const isChoosingAdvantages = useToggleStore((state) => state.isChoosingAdvantages);
  const toggleAdvantages = useToggleStore((state) => state.toggleAdvantages);
  const toggleDisadvantages = useToggleStore((state) => state.toggleDisadvantages);

  useEffect(() => {
    toggleAdvantages();
  }, []);

  const handleTabs = (key) => {
    key === 'advantages' ? toggleAdvantages() : toggleDisadvantages();
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
