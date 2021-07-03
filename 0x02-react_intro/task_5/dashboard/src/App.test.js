import React from 'react';
import App from './App/App';
// import holberton_logo from './assets/holberton_logo.jpeg';
import { getFullYear, getFooterCopy } from './utils/utils';
import { shallow } from 'enzyme';

describe('rendering components', () => {
  it('renders App component without crashing', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.exists()).toBe(true);
  });

  it('renders a div with the class App-header', () => {
    const wrapper = shallow((
      <App>
        <div className="App-header" />
      </App>
    ));

    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find('.App-header').children()).toHaveLength(2);
    expect(wrapper.exists('img')).toBe(true);
    expect(wrapper.exists('h1')).toBe(true);
    expect(wrapper.find('h1').text()).toEqual('School dashboard');
  });

  it('renders a div with the class App-body', () => {
    const wrapper = shallow((
      <App>
        <div className="App-body" />
      </App>
    ));
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find('.App-body').children()).toHaveLength(6);

    expect(wrapper.exists('p')).toBe(true);
    expect(wrapper.find('p').first().text()).toEqual('Login to access the full dashboard');

    expect(wrapper.find('label')).toHaveLength(2);
    expect(wrapper.find('input')).toHaveLength(2);

    expect(wrapper.find({ htmlFor: 'email' }).exists()).toBe(true);
    expect(wrapper.find('label').first().text()).toEqual('Email: ');
    expect(wrapper.find('#email').exists()).toBe(true);
    expect(wrapper.find('input[type="email"]').exists()).toBe(true);
    expect(wrapper.find({ name: 'email' }).exists()).toBe(true);

    expect(wrapper.find({ htmlFor: 'password' }).exists()).toBe(true);
    expect(wrapper.find('label').at(1).text()).toEqual('Password: ');
    expect(wrapper.find('#password').exists()).toBe(true);
    expect(wrapper.find({ type: 'password' }).exists()).toBe(true);
    expect(wrapper.find({ name: 'password' }).exists()).toBe(true);
  });

  it('renders a div with the class App-footer', () => {
    const wrapper = shallow((
      <App>
        <div className="App-footer" />
      </App>
    ));
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find('.App-footer').children()).toHaveLength(1);
    expect(wrapper.find('p').at(1).text()).toEqual(`Copyright ${getFullYear()} - ${getFooterCopy(true)}`);
  });
});
