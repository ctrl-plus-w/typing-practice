import './App.css';
import React, { useCallback, useEffect, useState } from 'react';

import Keyboard from './components/Keyboard';

import keysContext from './context/keys';

import { v4 as uuid } from 'uuid';

import { getRandomInt } from './utils';

const ROW_SIZE = 4;
const GROUP_AMOUNT = 4;

class Key {
  constructor(key, visual = key) {
    this._visual = visual;
    this._key = key;

    this._done = null;

    this._id = uuid();
  }

  validate() {
    this._done = true;
  }

  invalidate() {
    this._done = false;
  }

  get element() {
    let className = 'key';

    if (this.done === true) className += ' valid';
    if (this.done === false) className += ' invalid';

    return (
      <span className={className} key={this.id}>
        {this.visual}
      </span>
    );
  }

  get key() {
    return this._key;
  }

  get visual() {
    return this._visual;
  }

  get done() {
    return this._done;
  }

  get id() {
    return this._id;
  }
}

class Space extends Key {
  constructor() {
    super(' ', '_');
  }
}

const App = () => {
  const [speed, setSpeed] = useState(0);
  const [tempMs, setTempMs] = useState(0);

  const [validKeys, setValidKeys] = useState(['q', 's', 'd', 'f', 'j', 'k', 'l', 'm']);
  const [focused, setFocused] = useState(false);

  const [doneKeys, setDoneKeys] = useState([]);
  const [expectedKeys, setExpectedKeys] = useState([]);
  const [totalKeys, setTotalKeys] = useState(0);
  const [failedKeys, setFailedKeys] = useState(0);

  const generateSequence = useCallback(() => {
    setDoneKeys([]);
    setExpectedKeys([]);

    let group = [];

    for (let i = 0; i < GROUP_AMOUNT; i++) {
      for (let i = 0; i < ROW_SIZE; i++)
        group.push(validKeys.length === 1 ? new Key(validKeys[0]) : new Key(validKeys[getRandomInt(validKeys.length - 1)]));

      if (i !== GROUP_AMOUNT - 1) group.push(new Space());
    }

    setExpectedKeys(group);
  }, [validKeys]);

  useEffect(() => {
    generateSequence();
  }, [validKeys, generateSequence]);

  const handleInputChange = (event) => {
    event.preventDefault();

    const LETTER_AMOUNT = GROUP_AMOUNT * ROW_SIZE + GROUP_AMOUNT - 1;

    if (expectedKeys.length === LETTER_AMOUNT) {
      setTempMs(Date.now());
    }

    if (expectedKeys.length === 1) {
      setSpeed(getSpeed(LETTER_AMOUNT, Date.now() - tempMs));
      setTotalKeys((curr) => curr + LETTER_AMOUNT);
    }

    const firstExpectedEl = expectedKeys[0];
    const isValid = firstExpectedEl.key === event.key;

    if (isValid) firstExpectedEl.validate();
    else firstExpectedEl.invalidate();

    setDoneKeys((curr) => [...curr, firstExpectedEl]);
    setExpectedKeys((curr) => curr.slice(1));

    !isValid && setFailedKeys((curr) => curr + 1);

    if (expectedKeys.length === 1) generateSequence();
  };

  const getErrors = () => {
    const errors = Math.round((failedKeys / totalKeys) * 100);
    return isNaN(errors) || !isFinite(errors) ? 0 : errors;
  };

  const getSpeed = (letters, time) => {
    const speed = letters / (time / 60000) / 5;
    return isNaN(speed) || !isFinite(speed) ? 0 : speed.toFixed(0);
  };

  const focus = () => {
    setFocused(true);
  };

  const blur = () => {
    setFocused(false);
  };

  return (
    <keysContext.Provider value={{ validKeys, setValidKeys }}>
      <div className='container'>
        <div>
          <div className={`text-progression ${focused ? 'active' : ''}`}>
            <input type='text' className='text-input' onKeyPress={handleInputChange} onFocus={focus} onBlur={blur} />

            <p>
              {doneKeys.map((keyClass) => keyClass.element)}
              {expectedKeys.map((keyClass) => keyClass.element)}
            </p>

            <p>
              <span>{getErrors()}%</span> &#160;
              <span>{speed}wpm</span>
            </p>
          </div>

          <Keyboard />
        </div>
      </div>
    </keysContext.Provider>
  );
};

export default App;
