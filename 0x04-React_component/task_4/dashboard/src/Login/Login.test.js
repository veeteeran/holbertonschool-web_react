import React from 'react';
import Login from './Login';
import { shallow } from 'enzyme';

describe('rendering components', () => {
  it('renders Login component without crashing', () => {
    const wrapper = shallow(<Login />);

    expect(wrapper.exists()).toBe(true);
  });

  it('Login component renders 2 <input> and 2 <label> tags', () => {
    const wrapper = shallow(<Login />);

    expect(wrapper.find('label')).toHaveLength(2);
    expect(wrapper.find('input')).toHaveLength(2);
  });
});