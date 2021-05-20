import React from 'react';

const Key = ({ content = 'A', type = '' }) => {
  return (
    <div className={'key ' + type}>
      <span className='content'>{content.charAt(0).toUpperCase() + content.slice(1)}</span>
    </div>
  );
};

export default Key;
