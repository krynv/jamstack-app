import Layout from "../../components/Layout";
import characters from "../../data/characters.json";
import Link from "next/link";

const Characters = () => (
  <>
    <Layout />
    <h1>Character List</h1>

    <p>Our characters:</p>
    <ul>
      {characters.map(character => (
        <li key={character.id}>
          <Link href="/characters/[id]" as={`/characters/${character.id}`}>
            <a>{character.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  </>
);

export default Characters;
