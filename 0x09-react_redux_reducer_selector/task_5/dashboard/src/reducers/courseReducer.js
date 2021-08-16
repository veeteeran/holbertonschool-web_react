import {
  FETCH_COURSE_SUCCESS,
  SELECT_COURSE,
  UNSELECT_COURSE
} from '../actions/courseActionTypes'
import { Map } from 'immutable'
import courseNormalizer from '../schema/courses'


const initialState = Map([])

export default function courseReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_COURSE_SUCCESS: {
      const data = action.data.map((item) => ({
        id: item.id,
        name: item.name,
        isSelected: false,
        credit: item.credit,
      }))
      const normalizedData = courseNormalizer(data)
      return Map(state).merge(normalizedData)
    }
    case SELECT_COURSE: {
      return Map(state).setIn(
        ['entities', 'courses', action.index.toString(), 'isSelected'],
        true
      )
    }
    case UNSELECT_COURSE: {
      return state.setIn(
        ['entities', 'courses', action.index.toString(), 'isSelected'],
        false
      )
    }
    default:
      return state
  }
}
