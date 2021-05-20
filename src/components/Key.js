import React, { useEffect, useState } from 'react';

const Key = ({ content = 'a', keyName = content, type = '' }) => {
  const [pressed, setPressed] = useState(false);

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
    <div className={`key ${type} ${pressed ? 'down' : 'up'}`}>
      <span className='content'>{content.charAt(0).toUpperCase() + content.slice(1)}</span>
    </div>
  );
};

export default Key;
