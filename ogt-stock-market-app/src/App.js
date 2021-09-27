import React, { useState } from 'react';
import './App.css';
import Search from './Search';
import Header from './Header';
import MyList from './MyList';

function App() {
  const [myList, setMyList] = useState([])
  return (
    <div className="App">
      <Header />
      <MyList myList={myList} />
      <Search myList={myList} setMyList={setMyList} />
    </div>
  );
}

export default App;
