import { useContext, useEffect } from "react";
import { IsChoosingAdvantagesContext } from "../../context";
import "./Toggle.styles.scss";

import { Tab, Tabs } from "react-bootstrap";

const ToggleAdvantageDisadvantage = () => {
  const { setIsChoosingAdvantages } = useContext(IsChoosingAdvantagesContext);

  useEffect(()=> {
    setIsChoosingAdvantages(true);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  const handleTabs = (key) => {
    key === "advantages"
      ? setIsChoosingAdvantages(true)
      : setIsChoosingAdvantages(false);
  };

  return (
    <div className="toggle-container">
      <div className="toggle-advantage-section">
        <Tabs
          defaultActiveKey="advantages"
          className="toggle-advantages-disadvantages"
          onSelect={handleTabs}
        >
          <Tab eventKey="choose-from" className='tab-disabled' title="Choose From" disabled />
          <Tab eventKey="advantages" id='tab-advantages' title="Advantages" />
          <Tab eventKey="disadvantages" id='tab-disadvantages' title="Disadvantages" />
        </Tabs>
      </div>
    </div>
  );
};

export default ToggleAdvantageDisadvantage;
