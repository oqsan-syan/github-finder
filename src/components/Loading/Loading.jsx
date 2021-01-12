import React from 'react';
import './Loading.css';
import spinner from './spinner.gif';

const Loading = () => {
  return (
    <div className='loading'>
      <img src={spinner} alt=""/>
    </div>
  );
};

export default Loading;