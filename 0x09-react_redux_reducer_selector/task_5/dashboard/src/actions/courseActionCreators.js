import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes'

export const selectCourse = index => {
  return {
    type: SELECT_COURSE,
    index
  }
}

export const unSelectCourse = index => {
  return {
    type: UNSELECT_COURSE,
    index
  }
}

export const fetchCourseSuccess = () => {
  return {
    type: FETCH_COURSE_SUCCESS,
    data: [
      {
        id: 1,
        name: "ES6",
        credit: 60
      },
      {
        id: 2,
        name: "Webpack",
        credit: 20
      },
      {
        id: 3,
        name: "React",
        credit: 40
      }
    ]
  }
}
