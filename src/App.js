import logo from './logo.svg';
import { Button } from 'antd';

import './App.css';

function App() {
  return (
    <>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Button type="primary">Click here!!</Button>
        <p>
          Edit <code>src/App.js</code> and save to reload. Site created by Rayan Z. 
        </p>
        <a
          className="App-link"
          href="https://live.lequipe.fr/lachainelequipe/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Regarder l'Equipe TV
        </a>
      </header>
    </div>
    </>
    );
}

export default App;
