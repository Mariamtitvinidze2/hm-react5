import React from 'react';
import '../Circles/Circles.css';
import CIrcle from '../../__atoms/Circle/Circle';

const Circles = ({ onCircleClick }) => {
  return (
    <div className='Circles'>
      <div onClick={() => onCircleClick(1)}><CIrcle circle={1} /></div>
      <div onClick={() => onCircleClick(2)}><CIrcle circle={2} /></div>
      <div onClick={() => onCircleClick(3)}><CIrcle circle={3} /></div>
      <div onClick={() => onCircleClick(4)}><CIrcle circle={4} /></div>
      <div onClick={() => onCircleClick(5)}><CIrcle circle={5} /></div>
    </div>
  );
};

export default Circles;