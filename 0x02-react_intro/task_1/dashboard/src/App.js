import holberton_logo from './holberton_logo.jpeg';
import './App.css';
import { getFullYear, getFooterCopy } from './utils';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={holberton_logo} className="App-logo" alt="logo" />
        <h1 className="title">School dashboard</h1>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
      <hr className="hr" />
      <body className="App-body">
        <p>Login to access the full dashboard</p>
      </body>
      <hr className="hr" />
      <footer className="App-footer">{getFooterCopy(getFullYear())}</footer>
    </div>
  );
}

export default App;
