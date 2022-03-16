import { Route, Routes } from "react-router-dom";
import styledComponents from "styled-components";
import Pokemondeteil from "./containers/PokemonDeteil";
import PokemonsList from "./containers/PokemonsList";

function App() {

  return (
    <Appcontainer>
      <Routes>
        <Route path="/" element={<PokemonsList />} />
        <Route path="/pokemons/:id" element={<Pokemondeteil />} />
      </Routes>
    </Appcontainer>
  );
}

export default App;

const Appcontainer = styledComponents.div`

`;
