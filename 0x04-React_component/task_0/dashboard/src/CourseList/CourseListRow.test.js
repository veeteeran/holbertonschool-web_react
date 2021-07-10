import React from 'react';
import CourseListRow from './CourseListRow';
import { shallow } from 'enzyme';

describe('rendering CourseListRow', () => {
  it('checks when isHeader is true and textSecondCell does not exist', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell='Foo' />);

    expect(wrapper.find('tr').children()).toHaveLength(1);
    expect(wrapper.find('tr').childAt(0).html()).toEqual('<th colSpan=\"2\">Foo</th>')
  });

  it('checks when isHeader is true and textSecondCell exists', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell='Foo' textSecondCell='Bar' />);

    expect(wrapper.find('tr').children()).toHaveLength(2);
    expect(wrapper.find('tr').childAt(0).html()).toEqual('<th>Foo</th>')
    expect(wrapper.find('tr').childAt(1).html()).toEqual('<th>Bar</th>')
  });

  it('checks when isHeader is false', () => {
    const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell='Foo' textSecondCell='Bar' />);
    expect(wrapper.find('tr').children()).toHaveLength(2);
    expect(wrapper.find('tr').childAt(0).html()).toEqual('<td>Foo</td>')
    expect(wrapper.find('tr').childAt(1).html()).toEqual('<td>Bar</td>')
  })
})