import Layout from "../../components/Layout";
import fetch from "isomorphic-unfetch";

const Character = ({ character }) => {
  return (
    <Layout>
      <h1>{character.name}</h1>
      <p>
        {character.name} is from {character.homeworld}
      </p>
    </Layout>
  );
};

Character.getInitialProps = async ({ query }) => {
  const { id } = query;
  const reponse = await fetch(`http://localhost:3000/api/characters/${id}`);
  const character = await reponse.json();
  return { character };
};

export default Character;
