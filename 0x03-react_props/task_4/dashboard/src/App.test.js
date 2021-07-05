import React from 'react';
import App from './App/App';
import Notifications from './Notifications/Notifications';
import Login from './Login/Login';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import CourseList from './CourseList/CourseList';
import { shallow } from 'enzyme';

describe('rendering components', () => {
  it('renders App component without crashing', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.exists()).toBe(true);
  });

  it('App contains Notifications component', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.contains(<Notifications />)).toBe(true);
  });

  it('App contains Header component', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.contains(<Header />)).toBe(true);
  });

  it('App contains Login component', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.contains(<Login />)).toBe(true);
  });

  it('App contains Footer component', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.contains(<Footer />)).toBe(true);
  });

  it('checks CourseList is not rendered', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.contains(<CourseList />)).toBe(false);
  });
});

describe('when isLogged in is true', () => {
  const wrapper = shallow(<App isLoggedIn={true} />);

  it('checks Login is not rendered', () => {
    expect(wrapper.contains(<Login />)).toBe(false);
  });

  it('checks CourseList is rendered', () => {
    expect(wrapper.contains(<CourseList />)).toBe(true);
  })
});
