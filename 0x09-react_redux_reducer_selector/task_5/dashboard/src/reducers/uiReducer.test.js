import uiReducer, { initialState } from './uiReducer'
import { selectCourse } from '../actions/courseActionCreators'
import { displayNotificationDrawer } from '../actions/uiActionCreator'

describe('uiReducer', () => {
  it('Verifies initial state returned when no action is passed to uiReducer', () => {
    const myState = uiReducer(initialState, '')
    expect(myState.toJS()).toEqual(initialState.toJS())
  })

  it('Verifies the state equals the initial state when the action SELECT_COURSE is passed', () => {
    const myState = uiReducer(initialState, selectCourse())
    expect(myState.toJS()).toEqual(initialState.toJS())
  })

  it('Verifies property isNotificationDrawerVisible is true when DISPLAY_NOTIFICATION_DRAWER passed', () => {
    const myState = uiReducer(initialState, displayNotificationDrawer())
    expect(myState.toJS().isNotificationDrawerVisible).toEqual(true)
  })
})
