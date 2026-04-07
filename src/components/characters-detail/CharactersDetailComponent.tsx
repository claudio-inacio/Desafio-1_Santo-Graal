import { charactersDetail } from "../../data/charactersDetail";
import { CharacterDetails } from "./CharacterDetails";


export function CharactersDetailComponent() {
    return <CharacterDetails character={charactersDetail[2]} />;
}