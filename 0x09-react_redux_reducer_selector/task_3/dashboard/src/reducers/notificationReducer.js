import {
  MARK_AS_READ,
  SET_TYPE_FILTER,
  NotificationTypeFilters,
  FETCH_NOTIFICATIONS_SUCCESS
} from '../actions/notificationActionTypes'

const initialState = {
  notifications: [],
  filter: 'DEFAULT'
}

export default function notificationReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS: {
      return {
        ...state,
        notifications: action.data.map((item) => ({
          ...item,
          isRead: false
        }))
      }
    }
    case MARK_AS_READ: {
      return {
        ...state,
        notifications: state.notifications.map((item) => {
          if (item.id === action.index) {
            return {
              ...item,
              isRead: true
            }
          }
          return { ...item }
        })
      }
    }
    case SET_TYPE_FILTER: {
      return {
        ...state,
        filter: action.filter
      }
    }
    default:
      return state
  }
}
