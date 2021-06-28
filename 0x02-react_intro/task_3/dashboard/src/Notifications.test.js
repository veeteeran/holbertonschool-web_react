import React from 'react';
import Notifications from './Notifications';
import closeIcon from './close-icon.png';
import { getLatestNotification } from './utils';
import { shallow } from 'enzyme';

describe('rendering components', () => {
  it('renders Notifications component without crashing', () => {
    shallow(<Notifications />);
  });

  it('renders an unordered list', () => {
    const wrapper = shallow((<Notifications />));
    expect(wrapper.find('ul').children()).toHaveLength(3);
  });

  it('renders the text "Here is the list of notifications"', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.contains(<p>Here is the list of notifications</p>)).toBe(true);
  });
});
