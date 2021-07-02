import React from 'react';
import App from './App/App';
import holberton_logo from './holberton_logo.jpeg';
import { getFullYear, getFooterCopy } from './utils/utils';
import { shallow } from 'enzyme';

describe('rendering components', () => {
  it('renders App component without crashing', () => {
    shallow(<App />);
  });

  it('renders a div with the class App-header', () => {
    const wrapper = shallow((
      <App>
        <div className="App-header" />
      </App>
    ));
    expect(wrapper.contains(
      <div className="App-header">
        <img src={holberton_logo} className="App-logo" alt="logo" />
        <h1 className="title">School dashboard</h1>
      </div>
    )).toBe(true);
  });

  it('renders a div with the class App-body', () => {
    const wrapper = shallow((
      <App>
        <div className="App-body" />
      </App>
    ));
    expect(wrapper.contains(
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <label htmlFor="email">Email: </label>
        <input type="email" id="email" name="email" />
        <label htmlFor="password">Password: </label>
        <input type="password" id="password" name="password" />
        <button>OK</button>
      </div>
    )).toEqual(true);
  });

  it('renders a div with the class App-footer', () => {
    const wrapper = shallow((
      <App>
        <div className="App-footer" />
      </App>
    ));
    expect(wrapper.contains(
      <div className="App-footer">
        Copyright {getFullYear()} - {getFooterCopy(true)}
      </div>
    )).toEqual(true);
  });
});
