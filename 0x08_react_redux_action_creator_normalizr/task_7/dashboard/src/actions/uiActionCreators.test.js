import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from './uiActionTypes'
import {
  login,
  logout,
  displayNotificationDrawer,
  hideNotificationDrawer,
  loginSuccess,
  loginFailure,
  loginRequest
} from './uiActionCreator'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

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
// describe('loginRequest', () => {
//   it('should verify if the API returns the right response, the store received two actions LOGIN and LOGING_SUCCESS', () => {
//     const store = mockStore({})
//     jest.mock('node-fetch', () => require('fetch-mock').sandbox())
//     fetchMock.get('/login-success.json', 200)
//     store.dispatch(loginRequest('foo@bar.com', 'baz'))
//       .then(() => {
//         const actions = store.getActions()
//         expect(actions).toEqual('foo@bar.com', 'baz')
//       })

//     fetchMock.reset()
//   })
// })
