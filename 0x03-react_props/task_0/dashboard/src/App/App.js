import React from 'react';
import './App.css';
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const App = () => {
  return (
    <>
      <Notifications />
      <Header />
      <Login />
      <Footer />
    </>
    // <div className="App">
    //   <div className="App-header">
    //     <img src={holberton_logo} className="App-logo" alt="logo" />
    //     <h1 className="title">School dashboard</h1>
    //   </div>
    //   <hr className="hr" />
    //   <div className="App-body">
    //     <p>Login to access the full dashboard</p>
    //     <label htmlFor="email">Email: </label>
    //     <input type="email" id="email" name="email" />
    //     <label htmlFor="password">Password: </label>
    //     <input type="password" id="password" name="password" />
    //     <button>OK</button>
    //   </div>
    //   <hr className="hr" />
    //   <div className="App-footer">
    //     <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
    //   </div>
    // </div>
  );
}

export default App;
