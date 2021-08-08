import uiReducer, { initialState } from './uiReducer'
import { SELECT_COURSE } from '../actions/courseActionTypes'
import { DISPLAY_NOTIFICATION_DRAWER } from '../actions/uiActionTypes'

describe('uiReducer', () => {
  it('Verifies initial state returned when no action is passed to uiReducer', () => {
    const myState = uiReducer(initialState, '')
    expect(myState).toEqual(initialState)
  })

  it('Verifies the state equals the initial state when the action SELECT_COURSE is passed', () => {
    const myState = uiReducer(initialState, SELECT_COURSE)
    expect(myState).toEqual(initialState)
  })

  it('Verifies property isNotificationDrawerVisible is true when DISPLAY_NOTIFICATION_DRAWER passed', () => {
    const myState = uiReducer(initialState, DISPLAY_NOTIFICATION_DRAWER)
    expect(myState.isNotificationDrawerVisible).toEqual(true)
  })
})
