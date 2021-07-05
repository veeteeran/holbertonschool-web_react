import React from 'react';
import './App.css';
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import CourseList from '../CourseList/CourseList';
import PropTypes from 'prop-types';

const App = ({ isLoggedIn = false }) => {
  return (
    <>
      <div className='container'>
        <Header />
        <Notifications />
      </div>
      <hr className="hr" />
      {
        isLoggedIn
          ? <CourseList />
          : <Login />
      }
      <hr className="hr" />
      <Footer />
    </>
  );
}

App.propTypes = {
  isLoggedIn: PropTypes.bool
}

export default App;
