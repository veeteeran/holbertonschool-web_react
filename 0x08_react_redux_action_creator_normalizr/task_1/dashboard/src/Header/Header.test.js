/**
 * @jest-environment jsdom
 */
import React from 'react';
import { StyleSheetTestUtils } from 'aphrodite';
import Header from './Header';
import { shallow, mount } from 'enzyme';
import { AppContext, defaultUser } from '../App/AppContext';

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('rendering components', () => {
  it('renders Header component without crashing', () => {
    const wrapper = shallow(<AppContext.Provider><Header /></AppContext.Provider>);

    expect(wrapper.exists()).toBe(true);
  });

  it('Header renders img and h1 tags', () => {
    const wrapper = mount(<Header />);

    expect(wrapper.exists('img')).toBe(true);
    expect(wrapper.exists('h1')).toBe(true);
  })

  it('mounts a <Header /> component with a default context value', () => {
    const wrapper = mount(<AppContext.Provider value={{ user: defaultUser, logOut: () => { } }}><Header /></AppContext.Provider>);

    expect(wrapper.find('h1')).toHaveLength(1);
    expect(wrapper.find('img')).toHaveLength(1);
    expect(wrapper.find('#logoutSection').exists()).toBe(false)
  });

  it('Verifies that the logoutSection is created', () => {
    const testUser = {
      email: 'foo@bar.com',
      password: 'baz',
      isLoggedIn: true
    }
    const wrapper = mount(<AppContext.Provider value={{ user: testUser, logOut: () => { } }}><Header /></AppContext.Provider>);

    expect(wrapper.find('#logoutSection').exists()).toBe(true)
  });

  it('Verifies that clicking on the link is calling the spy', () => {
    const testVal = { user: { email: 'foo@bar.com', password: 'baz', isLoggedIn: true }, logOut: () => { } }
    const spy = jest.spyOn(testVal, 'logOut');
    const wrapper = mount(<AppContext.Provider value={testVal}><Header /></AppContext.Provider>);

    wrapper.find('#logoutSection a').simulate('click');
    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });
});