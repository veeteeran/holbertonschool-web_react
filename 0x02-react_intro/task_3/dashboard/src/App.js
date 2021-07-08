import holberton_logo from './holberton_logo.jpeg';
import './App.css';
import { getFullYear, getFooterCopy } from './utils';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={holberton_logo} className="App-logo" alt="logo" />
        <h1 className="title">School dashboard</h1>
      </div>
      <hr className="hr" />
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <label htmlFor="email">Email: </label>
        <input type="email" id="email" name="email" />
        <label htmlFor="password">Password: </label>
        <input type="password" id="password" name="password" />
        <button>OK</button>
      </div>
      <hr className="hr" />
      <div className="App-footer">Copyright {getFullYear()} - {getFooterCopy(true)}</div>
    </div>
  );
}

export default App;
