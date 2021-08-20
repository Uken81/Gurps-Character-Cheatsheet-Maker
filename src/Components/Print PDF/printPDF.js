import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';
import ComponentToPrint from '../../Display Results/ComponentToPrint';



const PrintPDF = (props) => {
  const componentRef = useRef();
  const selectedAdvantagesList = props.selectedAdvantagesList;
  const selectedDisadvantagesList = props.selectedDisadvantagesList;

  return (
    <div>
      <div className="button-container">
        <ReactToPrint
          trigger={() => <button className='tool-button'>Print this out!</button>}
          content={() => componentRef.current}
        />
      </div>
      <ComponentToPrint
        selectedAdvantagesList={selectedAdvantagesList}
        selectedDisadvantagesList={selectedDisadvantagesList}
        ref={componentRef}
      />
    </div>
  );
};

export default PrintPDF;