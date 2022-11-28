import './App.css';
import Button from 'react-bootstrap/esm/Button';
import Pokemones from './Components/Pokemones'
function App() {
  return (
    <div className="App">
      <header className="App-header">
          <h1>Pokedex</h1>
         
        <Pokemones/>
      </header>
    </div>
  );
}

export default App;
