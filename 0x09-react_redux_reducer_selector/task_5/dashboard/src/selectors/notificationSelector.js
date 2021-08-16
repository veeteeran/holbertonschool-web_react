import { Map } from 'immutable'

export const filterTypeSelected = state => state.get('filter')
export const getNotifications = state => {
  return Map(state.getIn(['notifications', 'entities', 'notifications']))
}
export const getUnreadNotifications = state => {
  const notifications = state.getIn(['notifications', 'entities', 'notifications'])
  const unreadNotifications = notifications.filter(
    notification => notification.isRead === false
  )

  return Map(unreadNotifications)
}