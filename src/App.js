import './App.css';
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <h1>React Weather App</h1>
      <Weather defaultCity="Kharkiv" />
      <footer>
        This project was coded by <a href='https://www.shecodes.io/graduates/72575-nataliia-shpak' target='_blank' rel="noreferrer"> Nataliia Shpak </a> {"  "}
        and it is {" "}
      <a href='https://github.com/NataliShpak/react-week5' target='_blank' rel="noreferrer">open-sources on GitHub </a> {"  "} and hosted on Netlify
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


