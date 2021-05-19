import React from 'react';

import './Keyboard.css';

const Keyboard = () => {
  return (
    <div className='keyboard'>
      <div className='row'>
        <div className='key'>
          <span className='content'>²</span>
        </div>
        <div className='key'>
          <span className='content'>1</span>
        </div>
        <div className='key'>
          <span className='content'>2</span>
        </div>
        <div className='key'>
          <span className='content'>3</span>
        </div>
        <div className='key'>
          <span className='content'>4</span>
        </div>
        <div className='key'>
          <span className='content'>5</span>
        </div>
        <div className='key'>
          <span className='content'>6</span>
        </div>
        <div className='key'>
          <span className='content'>7</span>
        </div>
        <div className='key'>
          <span className='content'>8</span>
        </div>
        <div className='key'>
          <span className='content'>9</span>
        </div>
        <div className='key'>
          <span className='content'>0</span>
        </div>
        <div className='key'>
          <span className='content'>{'('}</span>
        </div>
        <div className='key'>
          <span className='content'>=</span>
        </div>
        <div className='key del'>
          <span className='content'>Del</span>
        </div>
      </div>

      <div className='row'>
        <div className='key tab'>
          <span className='content'>Tab</span>
        </div>
        <div className='key'>
          <span className='content'>A</span>
        </div>
        <div className='key'>
          <span className='content'>Z</span>
        </div>
        <div className='key'>
          <span className='content'>E</span>
        </div>
        <div className='key'>
          <span className='content'>R</span>
        </div>
        <div className='key'>
          <span className='content'>T</span>
        </div>
        <div className='key'>
          <span className='content'>Y</span>
        </div>
        <div className='key'>
          <span className='content'>U</span>
        </div>
        <div className='key'>
          <span className='content'>I</span>
        </div>
        <div className='key'>
          <span className='content'>O</span>
        </div>
        <div className='key'>
          <span className='content'>P</span>
        </div>
        <div className='key'>
          <span className='content'>¨</span>
        </div>
        <div className='key'>
          <span className='content'>$</span>
        </div>
        <div className='key enter-top'>
          <span className='content'>Enter</span>
        </div>
      </div>

      <div className='row'>
        <div className='key caps-lock'>
          <span className='content'>Caps Lockssss</span>
        </div>
        <div className='key'>
          <span className='content'>Q</span>
        </div>
        <div className='key'>
          <span className='content'>S</span>
        </div>
        <div className='key'>
          <span className='content'>D</span>
        </div>
        <div className='key'>
          <span className='content'>F</span>
        </div>
        <div className='key'>
          <span className='content'>G</span>
        </div>
        <div className='key'>
          <span className='content'>H</span>
        </div>
        <div className='key'>
          <span className='content'>J</span>
        </div>
        <div className='key'>
          <span className='content'>K</span>
        </div>
        <div className='key'>
          <span className='content'>L</span>
        </div>
        <div className='key'>
          <span className='content'>M</span>
        </div>
        <div className='key'>
          <span className='content'>%</span>
        </div>
        <div className='key'>
          <span className='content'>*</span>
        </div>
        <div className='key enter-bottom'></div>
      </div>

      <div className='row'>
        <div className='key l-shift'>
          <span className='content'>Shift</span>
        </div>
        <div className='key'>
          <span className='content'>&lt;</span>
        </div>
        <div className='key'>
          <span className='content'>W</span>
        </div>
        <div className='key'>
          <span className='content'>X</span>
        </div>
        <div className='key'>
          <span className='content'>C</span>
        </div>
        <div className='key'>
          <span className='content'>V</span>
        </div>
        <div className='key'>
          <span className='content'>B</span>
        </div>
        <div className='key'>
          <span className='content'>N</span>
        </div>
        <div className='key'>
          <span className='content'>?</span>
        </div>
        <div className='key'>
          <span className='content'>;</span>
        </div>
        <div className='key'>
          <span className='content'>:</span>
        </div>
        <div className='key'>
          <span className='content'>!</span>
        </div>
        <div className='key r-shift'>
          <span className='content'>Shift</span>
        </div>
      </div>

      <div className='row'>
        <div className='key ctrl'>
          <span className='content'>Ctrl</span>
        </div>
        <div className='key alt'>
          <span className='content'>Alt</span>
        </div>
        <div className='key space'>
          <span className='content'>-</span>
        </div>
        <div className='key alt-gr'>
          <span className='content'>Alt Gr</span>
        </div>
        <div className='key ctrl'>
          <span className='content'>Ctrl</span>
        </div>
      </div>
    </div>
  );
};

export default Keyboard;
