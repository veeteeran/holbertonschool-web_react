import React from 'react';
import './App.css';
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import CourseList from '../CourseList/CourseList';
import PropTypes from 'prop-types';
import { getLatestNotification } from '../utils/utils';


class App extends React.Component {
  listCourses = [
    { id: 1, name: 'ES6', credit: 60 },
    { id: 2, name: 'Webpack', credit: 20 },
    { id: 3, name: 'React', credit: 40 }
  ];

  listNotifications = [
    { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'urgent', value: 'New resume available' },
    { id: 3, type: 'default', html: getLatestNotification() }
  ];

  render() {
    return (
      <>
        <div className='container'>
          <Header />
          <Notifications listNotifications={this.listNotifications} />
        </div>
        <hr className="hr" />
        {
          this.props.isLoggedIn
            ? <CourseList listCourses={this.listCourses} />
            : <Login />
        }
        <hr className="hr" />
        <Footer />
      </>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool
}

App.defaultProps = {
  isLoggedIn: false
}

export default App;
