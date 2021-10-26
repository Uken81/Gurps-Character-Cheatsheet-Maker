import { useContext } from 'react';
import ReactToPrint from 'react-to-print';
import { ComponentRefContext } from '../../../context';

const PrintPDF = () => {
  const { componentRef } = useContext(ComponentRefContext);
  return (
    <div>
      <div className="button-container">
        <ReactToPrint
          trigger={() => <button className='tool-button'>Download PDF</button>}
          content={() => componentRef.current}
        />
      </div>
    </div>
  );
};

export default PrintPDF;