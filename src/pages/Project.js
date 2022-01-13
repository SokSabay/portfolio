import React from "react";
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="home">
        <h1>Project</h1>
      </div>
      <div className="border">
        <a className="picture">
          <img className="" src="./IMG/gt.png" alt="profil picture"></img>
          <div class="text-block">
            <h4>Nature</h4>
            <p>What a beautiful sunrise</p>
          </div>
        </a>
        <a className="picture">
          <img className="" src="./IMG/gt.png" alt="profil picture"></img>
        </a>{" "}
        <a className="picture">
          <img className="" src="./IMG/gt.png" alt="profil picture"></img>
        </a>
        <a className="picture"></a> <a className="picture"></a>
      </div>
    </>
  );
};

export default About;
