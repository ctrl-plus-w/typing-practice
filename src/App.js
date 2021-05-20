import './App.css';
import React, { useEffect, useState } from 'react';

import Keyboard from './components/Keyboard';

import { v4 as uuid } from 'uuid';

import { getRandomInt } from './utils';

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
  const [validKeys] = useState(['q', 's', 'd', 'f', 'j', 'k', 'l', 'm']);
  const [focused, setFocused] = useState(false);

  const [doneKeys, setDoneKeys] = useState([]);
  const [expectedKeys, setExpectedKeys] = useState([]);
  const [totalKeys, setTotalKeys] = useState(0);
  const [failedKeys, setFailedKeys] = useState(0);

  useEffect(() => {
    generateSequence();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const generateSequence = () => {
    const rowSize = 4;
    const groupAmount = 4;

    setDoneKeys([]);
    setExpectedKeys([]);

    let group = [];

    for (let i = 0; i < groupAmount; i++) {
      for (let i = 0; i < rowSize; i++)
        group.push(validKeys.length === 1 ? new Key(validKeys[0]) : new Key(validKeys[getRandomInt(validKeys.length - 1)]));

      if (i !== groupAmount - 1) group.push(new Space());
    }

    setExpectedKeys(group);
  };

  const handleInputChange = (event) => {
    event.preventDefault();

    const firstExpectedEl = expectedKeys[0];
    const isValid = firstExpectedEl.key === event.key;

    if (isValid) firstExpectedEl.validate();
    else firstExpectedEl.invalidate();

    setDoneKeys((curr) => [...curr, firstExpectedEl]);
    setExpectedKeys((curr) => curr.slice(1));

    setTotalKeys((curr) => curr + 1);

    !isValid && setFailedKeys((curr) => curr + 1);

    if (expectedKeys.length === 1) generateSequence();
  };

  const getErrors = () => {
    const errors = Math.round((failedKeys / totalKeys) * 100);
    return isNaN(errors) ? 0 : errors;
  };

  const focus = () => {
    setFocused(true);
  };

  const blur = () => {
    setFocused(false);
  };

  return (
    <div className='container'>
      <div>
        <div className={`text-progression ${focused ? 'active' : ''}`}>
          <input type='text' className='text-input' onKeyPress={handleInputChange} onFocus={focus} onBlur={blur} />

          <p>
            {doneKeys.map((keyClass) => keyClass.element)}
            {expectedKeys.map((keyClass) => keyClass.element)}
          </p>

          <p>{getErrors()}%</p>
        </div>

        <Keyboard />
      </div>
    </div>
  );
};

export default App;
