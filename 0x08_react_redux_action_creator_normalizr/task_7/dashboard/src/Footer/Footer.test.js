/**
 * @jest-environment jsdom
 */
import React from 'react';
import Footer from './Footer';
import { getFullYear, getFooterCopy } from '../utils/utils';
import { shallow, mount } from 'enzyme';
import { AppContext, defaultUser } from '../App/AppContext';


describe('rendering components', () => {
  it('renders Footer component without crashing', () => {
    const wrapper = shallow(<Footer />);

    expect(wrapper.exists()).toBe(true);
  });

  it('Footer component renders "Copyright ${getFullYear()} - ${getFooterCopy(true)}"', () => {
    const wrapper = mount(<Footer />);

    expect(wrapper.find('.footer p').text()).toEqual(`Copyright ${getFullYear()} - ${getFooterCopy(true)}`);
  });

  it('Verifies that the link is not displayed when the user is logged out', () => {
    const testVal = { user: { email: 'foo@bar.com', password: 'baz', isLoggedIn: false }, logOut: () => { } }
    const wrapper = mount(<AppContext.Provider value={testVal}><Footer /></AppContext.Provider>);

    expect(wrapper.find('.footer a').exists()).toBe(false);
  });

  it('Verifies that the link displayed when the user is logged in', () => {
    const testVal = { user: { email: 'foo@bar.com', password: 'baz', isLoggedIn: true }, logOut: () => { } }
    const wrapper = mount(<AppContext.Provider value={testVal}><Footer /></AppContext.Provider>);

    expect(wrapper.find('.footer a').exists()).toBe(true);
  });
});