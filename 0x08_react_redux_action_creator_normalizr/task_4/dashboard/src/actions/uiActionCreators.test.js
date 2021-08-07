import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from './uiActionTypes'
import { login, logout, displayNotificationDrawer, hideNotificationDrawer } from './uiActionCreator'

describe('uiActionCreator', () => {
  it('should return type login with correct user object', () => {
    const loginCreator = login('foo@bar.com', 'baz')
    expect(loginCreator).toEqual({
      type: LOGIN,
      user: {
        email: 'foo@bar.com',
        password: 'baz'
      }
    })
  })

  it('should return type logout with correct user object', () => {
    const logoutCreator = logout()
    expect(logoutCreator).toEqual({ type: LOGOUT })
  })

  it('should return type displayNotificationDrawer with correct user object', () => {
    const displayNotificationDrawerCreator = displayNotificationDrawer()
    expect(displayNotificationDrawerCreator).toEqual({ type: DISPLAY_NOTIFICATION_DRAWER })
  })

  it('should return type hideNotificationDrawer with correct user object', () => {
    const hideNotificationDrawerCreator = hideNotificationDrawer()
    expect(hideNotificationDrawerCreator).toEqual({ type: HIDE_NOTIFICATION_DRAWER })
  })
})
