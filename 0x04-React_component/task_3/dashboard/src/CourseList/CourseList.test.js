import React from 'react';
import CourseList from './CourseList';
import CourseListRow from './CourseListRow';
import { shallow } from 'enzyme';

describe('rendering CourseList component', () => {
  it('renders Courselist component without crashing', () => {
    const wrapper = shallow(<CourseList />);

    expect(wrapper.exists()).toBe(true);
  });

  it('renders 5 different rows', () => {
    const listCourses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 }
    ];

    const wrapper = shallow(<CourseList listCourses={listCourses} />);

    expect(wrapper.find('thead').children()).toHaveLength(2);
    // wrapper.find('thead').forEach(node => {
    //   expect(node.equals(<CourseListRow
    //     key={listCourses.id}
    //     textFirstCell={listCourses.name}
    //     textSecondCell={listCourses.credit}
    //   />));
    // });

    expect(wrapper.find('tbody').children()).toHaveLength(3);
    // wrapper.find('tbody').forEach(node => {
    //   expect(node.equals(<CourseListRow
    //     key={listCourses.id}
    //     textFirstCell={listCourses.name}
    //     textSecondCell={listCourses.credit}
    //   />));
    // });
  });

  it('checks Notifications renders correctly if passed an empty array or listNotifications not passed', () => {
    const wrapper = shallow(<CourseList listCourses={[]} />);

    expect(wrapper.find('tbody').childAt(0).html()).toEqual('<tr><td>No course available yet</td><td></td></tr>');
  });
})