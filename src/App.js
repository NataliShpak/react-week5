import './App.css';
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <h1>React Weather App</h1>
      <Weather defaultCity="Kharkiv" />
      <footer>
        This project was coded by Nataliia Shpak and it is open-sources on {" "}
      <a href='https://startling-moonbeam-f03261.netlify.app/' target='_blank' rel="noreferrer">
               GitHub
      </a>
      </footer>
      {/* <header className="App-header">
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
      </header> */}
    </div>
  );
}


