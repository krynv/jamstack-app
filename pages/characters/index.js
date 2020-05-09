import React from "react";
import Link from "../../components/Link";
import Layout from "../../components/Layout";
import api from "../../lib/api";

const Characters = () => {
  const { response, error, isLoading } = api("/api/characters");
  return (
    <Layout>
      <h1>Character List</h1>
      <ul>
        {!isLoading &&
          response.map((character, index) => (
            <li key={index}>
              <Link
                href="/characters/[id]"
                as={`/characters/${character.$loki}`}
              >
                <a>{character.name}</a>
              </Link>
            </li>
          ))}
      </ul>
    </Layout>
  );
};

export default Characters;
