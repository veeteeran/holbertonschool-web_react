import {
  FETCH_COURSE_SUCCESS,
  SELECT_COURSE,
  UNSELECT_COURSE
} from '../actions/courseActionTypes'

const initialState = []

export default function courseReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_COURSE_SUCCESS: {
      return action.data.map((item) => ({
        id: item.id,
        name: item.name,
        isSelected: false,
        credit: item.credit,
      }))
    }
    case SELECT_COURSE: {
      return state.map((item) => {
        if (item.id === action.index) {
          return {
            ...item,
            isSelected: true
          }
        }
        return { ...item }
      })
    }
    case UNSELECT_COURSE: {
      return state.map((item) => {
        if (item.id === action.index) {
          return {
            ...item,
            isSelected: false
          }
        }
        return { ...item }
      })
    }
    default:
      return state
  }
}
