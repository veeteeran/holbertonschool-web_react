import holberton_logo from './holberton_logo.jpeg';
import './App.css';
import { getFullYear, getFooterCopy } from './utils';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={holberton_logo} className="App-logo" alt="logo" />
        <h1 className="title">School dashboard</h1>
      </header>
      <hr className="hr" />
      <body className="App-body">
        <p>Login to access the full dashboard</p>
        <label htmlFor="email">Email: </label>
        <input type="email" id="email" name="email" />
        <label htmlFor="password">Password: </label>
        <input type="password" id="password" name="password" />
        <button>OK</button>
      </body>
      <hr className="hr" />
      <footer className="App-footer">{getFooterCopy(getFullYear())}</footer>
    </div>
  );
}

export default App;
