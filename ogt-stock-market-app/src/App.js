import React, { useState } from 'react';
import './App.css';
import Search from './Search';
import Header from './Header';
import MyList from './MyList';

function App() {
  const [myList, setMyList] = useState([])
  const [walletAmount, setWalletAmount] = useState(30000);
  return (
    <div className="App">
      <div id="header-container">
        <Header />
        <p id="wallet-text">wallet amount: {walletAmount} Rs</p>
      </div>
      <MyList setMyList={setMyList} setWalletAmount={setWalletAmount} walletAmount={walletAmount} myList={myList} />
      <Search setWalletAmount={setWalletAmount} walletAmount={walletAmount} myList={myList} setMyList={setMyList} />
    </div>
  );
}

export default App;
