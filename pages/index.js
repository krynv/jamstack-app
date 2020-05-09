import React from "react";
import Layout from "../components/Layout";

const Home = () => {
  return (
    <Layout>
      <div className="jumbotron">
        <h1 className="display-3">Ster Wers Chars</h1>
        <p className="lead">
          This is an example app on showcasing{" "}
          <a href="https://nextjs.org/">Next.js</a>,{" "}
          <a href="https://vercel.co/">Vercel(Zeit) Now</a>,{" "}
          <a href="https://auth0.com">Auth0</a>,{" "}
          <a href="https://strapi.io">Strapi</a> and{" "}
          <a href="https://cloudinary.com/">Cloudinary</a>.
        </p>
        <p className="lead">Available API endpoints:</p>
        <ul>
          <li>
            <code>/api/characters</code> - List all characters
          </li>
          <li>
            <code>/api/character/ID</code> - List given character
          </li>
          <li>
            <code>/api/favourites</code> - List user favourites
          </li>
        </ul>
      </div>
    </Layout>
  );
};

export default Home;
