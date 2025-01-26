import React, { useState } from 'react';
import './MainCard.css';
import Oval from '../../__molecules/Oval/Oval';
import Texts from '../../__molecules/Texts/Texts';
import Circles from '../../__molecules/Circles/Circles';
import Button from '../Button/Button';
import Newimage from '../../__molecules/Newimage/Newimage';


const MainCard = () => {
  const [selectedCircle, setSelectedCircle] = useState(null); 
  const [isSubmitted, setIsSubmitted] = useState(false); 

  const handleCircleClick = (circle) => {
    setSelectedCircle(circle);
  };

  const handleSubmit = () => {
    if (selectedCircle) {
      setIsSubmitted(true);
    }
  };

  return (
    <div className='MainCard'>
      {!isSubmitted ? (
        <>
        <Oval/>
        <Texts />
        <Circles onCircleClick={handleCircleClick} />
        <div onClick={handleSubmit}>
          <Button />
        </div>
        </>
      ) : (
        <div className='thank-you-message'>
           <Newimage />
          <div className='Box'>
          <h2 className='h2'>You selected {selectedCircle}</h2>
          </div>
          <p className='p1'>Thank you!</p>
          <p className='p2'>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
        </div>
      )}
    </div>
  );
};

export default MainCard;