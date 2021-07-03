import React from 'react';
import App from './App/App';
import { shallow } from 'enzyme';

describe('rendering components', () => {
  it('renders App component without crashing', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.exists()).toBe(true);
  });
});
