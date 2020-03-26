import Layout from "../../components/Layout";

import { useRouter } from "next/router";
import characters from "../../data/characters.json";

const Character = () => {
  const router = useRouter();
  const character = characters[router.query.id];

  return (
    <Layout>
      <h1>{character?.name}</h1>
      <p>
        {character?.name} is from {character?.homeworld}
      </p>
    </Layout>
  );
};

export default Character;
