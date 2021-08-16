import notificationReducer from './notificationReducer'
import {
  markAsAread,
  setNotificationFilter
} from '../actions/notificationActionCreators'

describe("notificationReducer", () => {
  it("Verifies default state returned", () => {
    const myState = notificationReducer(undefined, {})
    expect(myState).toEqual({
      notifications: [],
      filter: 'DEFAULT'
    })
  })

  it("Verifies MARK_AS_READ returns the data passed", () => {
    const initialState = {
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
          isRead: true,
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
    const myState = notificationReducer(initialState, markAsAread(2))
    expect(myState).toEqual(returnState)
  })

  it("Verifies SET_TYPE_FILTER returns the data passed", () => {
    const initialState = {
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
    const returnState = {
      filter: "URGENT",
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
    const myState = notificationReducer(initialState, setNotificationFilter('URGENT'))
    expect(myState).toEqual(returnState)
  });
})