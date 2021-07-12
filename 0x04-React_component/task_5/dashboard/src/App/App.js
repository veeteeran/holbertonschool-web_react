import React from 'react';
import './App.css';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
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

  componentDidMount() {
    document.addEventListener('keydown', (e) => {
      if (e.ctrlKey && e.key === 'h') {
        alert('Logging you out');
        this.props.logOut();
      }
    });
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', e => {
      if (e.ctrlKey && e.key === 'h') {
        alert('Logging you out');
        this.props.logOut();
      }
    });
  }

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
            ? <BodySectionWithMarginBottom>
              <CourseList listCourses={this.listCourses} />
            </BodySectionWithMarginBottom>
            : <BodySectionWithMarginBottom>
              <Login />
            </BodySectionWithMarginBottom>
        }
        <BodySection title="News from the School">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        </BodySection>
        <hr className="hr" />
        <Footer />
      </>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func
}

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => { return }
}

export default App;
