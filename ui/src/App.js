import logo from "./logo.svg";
import "./App.css";

function App() {
  const onClick = async () => {
    const resp = await fetch("http://localhost:4000/ping");
    const text = await resp.text();
    alert(text);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button className="bigButton" onClick={onClick}>
          PING!
        </button>
      </header>
    </div>
  );
}

export default App;
