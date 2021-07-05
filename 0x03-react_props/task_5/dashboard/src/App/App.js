import React from 'react';
import './App.css';
import Notifications from '../Notifications/Notifications';
import NotificationItem from '../Notifications/NotificationItem';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import CourseList from '../CourseList/CourseList';
import PropTypes from 'prop-types';
import { getLatestNotification } from '../utils/utils';


const App = ({ isLoggedIn = false }) => {
  const listCourses = [
    { id: 1, name: 'ES6', credit: 60 },
    { id: 2, name: 'Webpack', credit: 20 },
    { id: 3, name: 'React', credit: 40 }
  ];

  const listNotifications = [
    { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'urgent', value: 'New resume available' },
    { id: 3, type: 'default', html: getLatestNotification() }
  ];

  return (
    <>
      <div className='container'>
        <Header />
        <Notifications listNotifications={listNotifications} />
      </div>
      <hr className="hr" />
      {
        isLoggedIn
          ? <CourseList listCourses={listCourses} />
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
