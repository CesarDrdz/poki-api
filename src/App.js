import './App.css';
import Pokemon from './components/Pokemon';


function App() {


    const fetchPokemon = () =>{
     
    }

  return (
    <div className="App">
      <fieldset>
        <legend>Pokemon</legend>
        <button onClick={fetchPokemon} >Fetch Pokemon</button>
        </fieldset>
        <Pokemon/>
    </div>
  );
}

export default App;
