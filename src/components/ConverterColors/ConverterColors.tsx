import React, {useState} from 'react';
import './ConverterColors.css';

import {ConverterColorForm} from '../ConverterColorForm/ConverterColorsForm';

export const ConverterColors = () => {
  const [state, setState] = useState({
    bgColor: 'transparent',
  });

  const handleChangeBgColor = (value: string) => {
    setState({
      bgColor: value,
    });
  };

  return (
    <div
      className="converter-colors d-flex align-items-center"
      style={{backgroundColor: state.bgColor}}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-4 col-xl-2">
            <ConverterColorForm changeBgColor={handleChangeBgColor} />
          </div>
        </div>
      </div>
    </div>
  );
};
