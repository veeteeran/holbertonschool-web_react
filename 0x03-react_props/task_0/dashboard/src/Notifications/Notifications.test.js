import React from 'react';
import Notifications from './Notifications';
import { getLatestNotification } from '../utils/utils';
import { shallow } from 'enzyme';

describe('rendering components', () => {
  it('renders Notifications component without crashing', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders an unordered list', () => {
    const wrapper = shallow((<Notifications />));
    expect(wrapper.find('ul').children()).toHaveLength(3);
    expect(wrapper.find('ul').childAt(0).html()).toEqual('<li data-default=\"true\">New course available</li>');
    expect(wrapper.find('ul').childAt(1).html()).toEqual('<li data-urgent=\"true\">New resume available</li>');
    expect(wrapper.find('ul').childAt(2).html()).toEqual(`<li data-urgent=\"true\">${getLatestNotification()}</li>`);
  });

  it('renders the text "Here is the list of notifications"', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.contains(<p>Here is the list of notifications</p>)).toBe(true);
  });
});
