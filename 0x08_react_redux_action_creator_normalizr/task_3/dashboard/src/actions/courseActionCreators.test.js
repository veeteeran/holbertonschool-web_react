import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';
import { selectCourse, unSelectCourse } from "./courseActionCreators";

describe("Action creator", () => {
  it("should return { type: SELECT_COURSE, index: 1 } when calling creator with 1", () => {
    const actionCreator = selectCourse(1);
    expect(actionCreator).toEqual({ type: SELECT_COURSE, payload: 1 });
  });

  it("should return { type: SELECT_COURSE, index: 1 } when calling creator with 1", () => {
    const actionCreator = unSelectCourse(1);
    expect(actionCreator).toEqual({ type: UNSELECT_COURSE, payload: 1 });
  });
});