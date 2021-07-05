import React from 'react';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';
import { getLatestNotification } from '../utils/utils';
import { shallow } from 'enzyme';

describe('rendering components', () => {
  it('renders Notifications component without crashing', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders an unordered list', () => {
    const wrapper = shallow((<Notifications displayDrawer={true} />));
    expect(wrapper.find('ul').children()).toHaveLength(3);
    wrapper.find('ul').forEach(node => {
      expect(node.equals(<NotificationItem />));
    });
  });

  it('renders the right html', () => {
    const wrapper = shallow((<Notifications displayDrawer={true} />));

    expect(wrapper.find('ul').childAt(0).html()).toEqual('<li data-notification-type=\"default\">New course available</li>');
    expect(wrapper.find('ul').childAt(1).html()).toEqual('<li data-notification-type=\"urgent\">New resume available</li>');
    expect(wrapper.find('ul').childAt(2).html()).toEqual(`<li data-urgent=\"true\">${getLatestNotification()}</li>`);
  });

  it('renders the text "Here is the list of notifications"', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.contains(<p>Here is the list of notifications</p>)).toBe(true);
  });

  it('check that the menu item is being displayed when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications />);

    expect(wrapper.find('.menuItem').exists()).toEqual(true);
  });

  it('check that the div.Notifications is not being displayed when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications />);

    expect(wrapper.find('.Notifications').exists()).toEqual(false);
  });

  it('check that the menu item is being displayed when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);

    expect(wrapper.find('.menuItem').exists()).toEqual(true);
  });

  it('check that the div.Notifications is being displayed when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);

    expect(wrapper.find('.Notifications').exists()).toEqual(true);
  });
});
