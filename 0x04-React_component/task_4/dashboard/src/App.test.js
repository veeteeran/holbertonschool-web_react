/**
 * @jest-environment jsdom
 */
import React from 'react';
import App from './App/App';
import Notifications from './Notifications/Notifications';
import Login from './Login/Login';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import CourseList from './CourseList/CourseList';
import { shallow, mount } from 'enzyme';

describe('rendering components', () => {
  it('renders App component without crashing', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.exists()).toBe(true);
  });

  it('App contains Notifications component', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find(Notifications)).toHaveLength(1);
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
    expect(wrapper.find(CourseList)).toHaveLength(1);
  })
});

describe('when Ctrl+h pressed', () => {
  it('checks logOut function is called', () => {
    const mockFn = jest.fn()
    const wrapper = mount(<App logOut={mockFn} />);
    const event = new KeyboardEvent('keydown', { ctrlKey: true, key: 'h' })

    document.dispatchEvent(event);
    expect(mockFn).toHaveBeenCalled();
    wrapper.unmount();
  });

  window.alert = jest.fn();
  it('checks alert function is called', () => {
    const wrapper = mount(<App />);
    const spy = jest.spyOn(window, 'alert');
    const event = new KeyboardEvent('keydown', { ctrlKey: true, key: 'h' })
    document.dispatchEvent(event);

    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
    wrapper.unmount();
  });

  it('checks alert string is "Logging you out"', () => {
    const wrapper = mount(<App />);
    const spy = jest.spyOn(window, 'alert');
    const event = new KeyboardEvent('keydown', { ctrlKey: true, key: 'h' })
    document.dispatchEvent(event);

    expect(spy).toHaveBeenCalledWith('Logging you out');
    jest.restoreAllMocks()
    wrapper.unmount();
  });
  window.alert.mockClear();
});
