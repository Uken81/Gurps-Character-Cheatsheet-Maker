import ReactToPrint from 'react-to-print';

const PrintPDF = (props) => {
  const componentRef = props.componentRef;

  return (
    <div>
      <div className="button-container">
        <ReactToPrint
          trigger={() => <button className='tool-button'>Print this out!</button>}
          content={() => componentRef.current}
        />
      </div>
    </div>
  );
};

export default PrintPDF;