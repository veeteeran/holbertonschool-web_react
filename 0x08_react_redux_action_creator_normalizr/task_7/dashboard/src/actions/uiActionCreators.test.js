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
jest.mock("node-fetch", () => require("fetch-mock").sandbox());
const fetchMock = require("node-fetch");

const middlewares = [thunk]
const mockStore = configureStore(middlewares)
const store = mockStore({});

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

describe("loginRequest", () => {
  // it("should verify store received LOGIN and LOGIN_SUCCESS actions", () => {
  //   fetchMock.get("/login-success.json", 200);
  //   return store.dispatch(loginRequest('foo@bar.com', 'baz')).then(() => {
  //     const actions = store.getActions();
  //     expect(actions[0]).toEqual(login('foo@bar.com', 'baz'));
  //     expect(actions[1]).toEqual(loginSuccess());
  //   });
  // });

  it("should verify store received LOGIN and LOGIN_FAILURE actions", () => {
    fetchMock.get(
      "/login-success.json",
      { throws: new Error("fetch failed") },
      {
        overwriteRoutes: true,
      }
    );
    return store.dispatch(loginRequest('foo@bar.com', 'baz')).then(() => {
      const actions = store.getActions();
      expect(actions[2]).toEqual(login('foo@bar.com', 'baz'));
      expect(actions[3]).toEqual(loginFailure());
    });
  });
});
