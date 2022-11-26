import Pokemones from './Components/Pokemones'; 
import './App.css';
import Button from 'react-bootstrap/esm/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <h1>Pokedex</h1>
          <Button/>
      </header>
      <Pokemones/>
    </div>
  );
}

export default App;
