import React from 'react';
import spinner from './spinner.gif';

export default () => {
  return (
    <div>
      <img
        src={spinner}
        style={{width: '200px', margin: 'auto', display: 'block'}}
        alt="Loading..."
      />
    </div>
  )
}
