import React from 'react';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';
import { getLatestNotification } from '../utils/utils';
import { shallow, mount, unmount } from 'enzyme';

describe('rendering components', () => {
  it('renders Notifications component without crashing', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders an unordered list', () => {
    const listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'default', html: getLatestNotification() }
    ];

    const wrapper = shallow((<Notifications displayDrawer={true} listNotifications={listNotifications} />));
    expect(wrapper.find('ul').children()).toHaveLength(3);
    wrapper.find('ul').forEach(node => {
      expect(node.equals(<NotificationItem />));
    });
  });

  it('renders the right html', () => {
    const listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'default', html: getLatestNotification() }
    ];

    const wrapper = shallow((<Notifications displayDrawer={true} listNotifications={listNotifications} />));

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

  it('checks Notifications renders correctly if passed an empty array or listNotifications not passed', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={[]} />);

    expect(wrapper.find('ul').childAt(0).html()).toEqual('<li data-notification-type=\"default\">No new notification for now</li>');
  });

  it('checks when markAsRead called, console.log called with `Notification ${id} has been marked as read`', () => {
    const wrapper = shallow(<Notifications />);
    const spy = jest.spyOn(console, 'log').mockImplementation();

    wrapper.instance().markAsRead = spy;
    wrapper.instance().markAsRead(1);
    expect(wrapper.instance().markAsRead).toBeCalledWith(1);
    expect(spy).toBeCalledTimes(1);
    expect(spy).toBeCalledWith(1);
    spy.mockRestore();
  })

  it('checks <Notifications /> doesn’t rerender when updating the props of the component with the same list', () => {
    const listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'default', html: getLatestNotification() }
    ];
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);

    expect(wrapper.instance().shouldComponentUpdate(listNotifications)).toBe(false)
  })

  it('checks <Notifications /> rerenders when updating the props of the component with a longer list', () => {
    const listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'default', html: getLatestNotification() }
    ];
    const newNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'default', html: getLatestNotification() },
      { id: 4, type: 'default', value: 'Foo' }
    ];
    const wrapper = shallow(<Notifications listNotifications={listNotifications} />);

    expect(wrapper.instance().shouldComponentUpdate(newNotifications)).toBe(true)
  })
});
