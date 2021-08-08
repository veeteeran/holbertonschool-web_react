import { MARK_AS_READ, SET_TYPE_FILTER, NotificationTypeFilters } from "./notificationActionTypes";
import { markAsAread, setNotificationFilter } from './notificationActionCreators'

describe('notificationActionCreators', () => {
  it('should return { type: MARK_AS_READ, index: 1 } when calling creator with 1', () => {
    const actionCreator = markAsAread(1);
    expect(actionCreator).toEqual({ type: MARK_AS_READ, index: 1 });
  })

  it('should return { type: SET_TYPE_FILTER, filter: "DEFAULT" } when calling creator with 1', () => {
    const actionCreator = setNotificationFilter(NotificationTypeFilters.DEFAULT);
    expect(actionCreator).toEqual({ type: SET_TYPE_FILTER, filter: 'DEFAULT' });
  })

  it('should return { type: SET_TYPE_FILTER, filter: "URGENT" } when calling creator with 1', () => {
    const actionCreator = setNotificationFilter(NotificationTypeFilters.URGENT);
    expect(actionCreator).toEqual({ type: SET_TYPE_FILTER, filter: 'URGENT' });
  })
})
