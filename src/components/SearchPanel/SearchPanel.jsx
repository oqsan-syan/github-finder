import React, { useState } from 'react';
import Profile from '../Profile/Profile';
import serach from './search.png';
import Tabs from '../TabPanel/TabPanel';
import './SerachPanel.css';
import Loading from '../Loading/Loading';

const SearchPanel = () => {
  const [input, setInput] = useState("");
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);

  const onChangeHandler = e => {
    setInput(e.target.value);
  };

  const onSubmitHandler = e => {
    e.preventDefault();

    setLoading(true);
    const url = `https://api.github.com/users/${input}`;

    fetch(url)
      .then(res => res.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(err => setData(err.message));
  };

  if(loading) {
    return <Loading />
  }
  return (
    <>
      <form className='searchPanel' onSubmit={onSubmitHandler}>
        <input type="text" className='serachPanel__input' value={input} onChange={onChangeHandler} placeholder='Serach user'/>
        <button className='serachPanel__icon' disabled={!input} type="submit">
          <img src={serach} alt="search-icon"/>
        </button>
      </form>
      <Profile
        data={data}
       />
       <Tabs
        data={data}
        />
    </>
  );
};

export default SearchPanel;