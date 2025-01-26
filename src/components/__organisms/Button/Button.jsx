import React from 'react';
import '../Button/Button.css';

const Button = ({ onClick }) => {
  return (
    <div>
      <button className='button' onClick={onClick}>
        Submit
      </button>
    </div>
  );
};

export default Button;