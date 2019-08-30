import React from "react";
import Head from "next/head";
import Terminal from "../components/terminal";
import Visuals from "../components/visuals";
import Blocks from "../components/blocks";

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
    </Head>
    <div className="monitor">
      <div className="back-screen">
        <Terminal />
        <Visuals />
        <Blocks />
      </div>
    </div>

    <style jsx>{`
      .monitor {
        border: 1rem solid black;
      }
      .back-screen {
        border: 5px outset grey;
        background: linear-gradient(45deg, black, transparent);
        display: grid;
        grid-template-columns: 20% 20% 20% 20% 20%;
        grid-template-rows: auto;
        grid-template-areas:
          "visuals visuals visuals terminal terminal"
          "visuals visuals visuals terminal terminal"
          "blocks blocks blocks terminal terminal"
          "blocks blocks blocks terminal terminal";
      }
    `}</style>
  </div>
);

export default Home;
