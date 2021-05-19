import './App.css';
import React from 'react';

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

const initialState = {
  validKeys: ['q', 's', 'd', 'f', 'j', 'k', 'l', 'm'],
  doneKeys: [],
  expectedKeys: [],
  totalKeys: 0,
  failedKeys: 0,
  passedKeys: 0,
};

const LETTER_ARRAY = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];

class App extends React.Component {
  constructor() {
    super();

    this.state = initialState;
  }

  generateSequence = () => {
    const rowSize = 4;
    const groupAmount = 4;

    this.setState({
      doneKeys: [],
      expectedKeys: [],
    });

    const validKeys = this.state.validKeys;

    let group = [];

    for (let i = 0; i < groupAmount; i++) {
      for (let i = 0; i < rowSize; i++)
        group.push(validKeys.length === 1 ? new Key(validKeys[0]) : new Key(validKeys[getRandomInt(validKeys.length - 1)]));

      if (i !== groupAmount - 1) group.push(new Space());
    }

    this.setState({
      expectedKeys: group,
    });
  };

  handleInputChange = (event) => {
    event.preventDefault();

    const firstExpectedEl = this.state.expectedKeys[0];
    const isValid = firstExpectedEl.key === event.key;

    if (isValid) firstExpectedEl.validate();
    else firstExpectedEl.invalidate();

    if (firstExpectedEl.key !== event.key) this.generateSequence();

    this.setState({
      doneKeys: [...this.state.doneKeys, firstExpectedEl],
      expectedKeys: this.state.expectedKeys.slice(1),

      totalKeys: this.state.totalKeys + 1,

      failedKeys: isValid ? this.state.failedKeys : this.state.failedKeys + 1,
      passedKeys: isValid ? this.state.passedKeys + 1 : this.state.passedKeys,
    });

    if (this.state.expectedKeys.length === 1) this.generateSequence();
  };

  handleCheckboxChange = (letter) => {
    // TODO : Prevent default if only one letter remaining.

    const arrayIncludeLetter = this.state.validKeys.includes(letter);
    if (arrayIncludeLetter) this.setState({ validKeys: this.state.validKeys.filter((key) => key !== letter) });
    else this.setState({ validKeys: [...this.state.validKeys, letter] });
  };

  componentDidMount() {
    this.generateSequence();
  }

  getErrors() {
    const errors = Math.round((this.state.failedKeys / this.state.totalKeys) * 100);
    return isNaN(errors) ? 0 : errors;
  }

  render() {
    // TODO : Patch NaN error percentage.

    return (
      <div className='container'>
        <div className='config'>
          <div className='counters'>
            <p>Errors : {this.getErrors()}%</p>
            <p>Total : {this.state.totalKeys}</p>
          </div>
          <div className='char-picker'>
            {LETTER_ARRAY.map((letter) => {
              return (
                <div key={letter}>
                  <input
                    type='checkbox'
                    checked={this.state.validKeys.includes(letter.toLowerCase())}
                    onChange={() => this.handleCheckboxChange(letter.toLowerCase())}
                  />
                  {letter}
                </div>
              );
            })}
            <button className='regen-button' onClick={this.generateSequence}>
              Re-generate !
            </button>
          </div>
        </div>

        <div className='text-progression'>
          {this.state.doneKeys.map((keyClass, i) => keyClass.element)}
          {this.state.expectedKeys.map((keyClass) => keyClass.element)}
        </div>
        <p type='text' className='text-input' contentEditable={true} suppressContentEditableWarning={true} onKeyPress={this.handleInputChange}></p>
      </div>
    );
  }
}

export default App;
