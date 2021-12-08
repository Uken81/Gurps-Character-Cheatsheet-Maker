import React from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useContext } from 'react';
import { ComponentRefContext } from '../../context.js';
import DisplayAdvantages from './DisplayAdvantages';
import DisplayDisadvantages from './DisplayDisadvantages';

import './DisplayResults.styles.scss';

const ComponentToPrint = () => {
  const { componentRef, setComponentRef } = useContext(ComponentRefContext);

  const divRef = useRef();

  useEffect(() => {
    const createReference = () => {
      setComponentRef(divRef);
    };
    createReference();
  }, []);

  return (
    <div className="display-container" ref={componentRef}>
      <DisplayAdvantages />
      <DisplayDisadvantages />
    </div>
  );
};

export default ComponentToPrint;
