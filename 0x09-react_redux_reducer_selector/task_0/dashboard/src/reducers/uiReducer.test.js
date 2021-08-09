import uiReducer, { initialState } from './uiReducer'
import { selectCourse } from '../actions/courseActionCreators'
import { displayNotificationDrawer } from '../actions/uiActionCreator'

describe('uiReducer', () => {
  it('Verifies initial state returned when no action is passed to uiReducer', () => {
    const myState = uiReducer(initialState, '')
    expect(myState).toEqual(initialState)
  })

  it('Verifies the state equals the initial state when the action SELECT_COURSE is passed', () => {
    const myState = uiReducer(initialState, selectCourse())
    expect(myState).toEqual(initialState)
  })

  it('Verifies property isNotificationDrawerVisible is true when DISPLAY_NOTIFICATION_DRAWER passed', () => {
    const myState = uiReducer(initialState, displayNotificationDrawer())
    expect(myState.isNotificationDrawerVisible).toEqual(true)
  })
})
