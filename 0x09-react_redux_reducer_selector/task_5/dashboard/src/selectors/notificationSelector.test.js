import {
  filterTypeSelected,
  getNotifications,
  getUnreadNotifications,
} from './notificationSelector'
import { Map } from 'immutable'
import { notificationsNormalizer } from '../schema/notifications'
import notificationReducer from '../reducers/notificationReducer'
import { markAsAread } from '../actions/notificationActionCreators'

const initialState = Map({
  notifications: [],
  filter: 'DEFAULT'
})

const returnState = {
  filter: "DEFAULT",
  notifications: [
    {
      id: 1,
      isRead: false,
      type: "default",
      value: "New course available",
    },
    {
      id: 2,
      isRead: false,
      type: "urgent",
      value: "New resume available",
    },
    {
      id: 3,
      isRead: false,
      type: "urgent",
      value: "New data available",
    },
  ],
}

describe('notificationSelector', () => {
  it('Verifies filterTypeSelected works as expected', () => {
    const filter = filterTypeSelected(initialState);
    expect(filter).toEqual('DEFAULT')
  })

  // it('Verifies getNotifications returns a list of the message entities within the reducer', () => {
  //   const notifications = getNotifications(notificationReducer(initialState, returnState.notifications))
  //   expect(notifications.toJS()).toEqual(notificationsNormalizer(returnState.notifications))
  // })

  // it('Verifies getUnreadNotifications return a list of the message entities within the reducer', () => {

  // })
})

