import Header from "./components/header/HeaderComponent";

import { NavListPersons } from "./components/nav/NavListPersonsComponets";
import { characters } from "./data/characters";

export default function App() {
  return (
    <div>
      <Header />
      <NavListPersons characters={characters} selectedCharacterId={1} onSelectCharacter={() => { }} />
    </div>
  )
}
