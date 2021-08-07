import React from 'react';
import { StyleSheetTestUtils } from 'aphrodite';
import Login from './Login';
import { shallow } from 'enzyme';

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('rendering components', () => {
  it('renders Login component without crashing', () => {
    const wrapper = shallow(<Login />);

    expect(wrapper.exists()).toBe(true);
  });

  it('Login component renders 3 <input> and 2 <label> tags', () => {
    const wrapper = shallow(<Login />);

    expect(wrapper.find('label')).toHaveLength(2);
    expect(wrapper.find('input')).toHaveLength(3);
  });

  it('checks that the submit button is disabled by default', () => {
    const wrapper = shallow(<Login />);

    expect(wrapper.find('.yellowBorder_1sbjbp4').prop('disabled')).toBe(true);
  });

  it('checks that after changing the value of the two inputs, the button is enabled', () => {
    const wrapper = shallow(<Login />);
    const email = {
      target: {
        name: 'email',
        value: 'email'
      }
    }
    const password = {
      target: {
        name: 'password',
        value: 'password'
      }
    }

    wrapper.find({ name: 'email' }).simulate('change', email)
    wrapper.find({ name: 'password' }).simulate('change', password)
    expect(wrapper.find('.yellowBorder_1sbjbp4').prop('disabled')).toBe(false);
  });
});