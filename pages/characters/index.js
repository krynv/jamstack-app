import Layout from "../../components/Layout";
import characters from "../../data/characters.json";

const Characters = () => (
  <>
    <Layout />
    <h1>Character List</h1>

    <p>Our characters:</p>
    <ul>
      {characters.map(character => (
        <li key={character.id}>{character.name}</li>
      ))}
    </ul>
  </>
);

export default Characters;
