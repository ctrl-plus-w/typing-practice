import React from 'react';

import Key from './Key';

import './Keyboard.css';

const Keyboard = () => {
  return (
    <div className='keyboard'>
      <div className='row'>
        <Key content='1' />
        <Key content='2' />
        <Key content='3' />
        <Key content='4' />
        <Key content='5' />
        <Key content='6' />
        <Key content='7' />
        <Key content='8' />
        <Key content='9' />
        <Key content='0' />
        <Key content=')' />
        <Key content='=' />
        <Key content='Del' type='del' keyName='Backspace' />
      </div>

      <div className='row'>
        <Key content='Tab' type='tab' />
        <Key content='a' />
        <Key content='z' />
        <Key content='e' />
        <Key content='r' />
        <Key content='t' />
        <Key content='y' />
        <Key content='u' />
        <Key content='i' />
        <Key content='o' />
        <Key content='p' />
        <Key content='^' />
        <Key content='$' />
        <Key content='*' />
      </div>

      <div className='row'>
        <Key content='Caps Lock' type='caps-lock' />
        <Key content='q' />
        <Key content='s' />
        <Key content='d' />
        <Key content='f' />
        <Key content='g' />
        <Key content='h' />
        <Key content='j' />
        <Key content='k' />
        <Key content='l' />
        <Key content='m' />
        <Key content='ù' />
        <Key content='Enter' type='enter' />
      </div>

      <div className='row'>
        <Key content='Shift' type='l-shift' />
        <Key content='<' />
        <Key content='w' />
        <Key content='x' />
        <Key content='c' />
        <Key content='v' />
        <Key content='b' />
        <Key content='n' />
        <Key content=',' />
        <Key content=';' />
        <Key content=':' />
        <Key content='!' />
        <Key content='Shift' type='r-shift' />
      </div>

      <div className='row'>
        <Key content='Ctrl' type='ctrl' keyName='Control' />
        <Key content='Alt' type='alt' keyName='Alt' />
        <Key content='-' type='space' keyName=' ' />
        <Key content='Alt Gr' type='alt-gr' keyName='Alt Gr' />
        <Key content='Ctrl' type='ctrl' keyName='Control' />
      </div>
    </div>
  );
};

export default Keyboard;
