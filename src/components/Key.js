import React, { useContext, useEffect, useState } from 'react';

import keysContext from '../context/keys';

const Key = ({ content = 'a', keyName = content, type = '' }) => {
  const { validKeys, setValidKeys } = useContext(keysContext);

  const [pressed, setPressed] = useState(false);

  const handleClick = (event) => {
    setPressed(true);
    setTimeout(() => setPressed(false), 200);

    if (validKeys.includes(content.toLowerCase())) setValidKeys((curr) => curr.filter((key) => key !== content.toLowerCase()));
    else setValidKeys((curr) => [...curr, content.toLowerCase()]);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Alt') return;

    setPressed((curr) => (event.key.toLowerCase() === keyName.toLowerCase() ? true : curr));
  };

  const handleKeyUp = (event) => {
    setPressed((curr) => (event.key.toLowerCase() === keyName.toLowerCase() ? false : curr));
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  return (
    <div className={`key ${type} ${pressed ? 'down' : 'up'} ${!validKeys.includes(content.toLowerCase()) ? 'disabled' : ''}`} onClick={handleClick}>
      <span className='content'>{content.charAt(0).toUpperCase() + content.slice(1)}</span>
    </div>
  );
};

export default Key;
