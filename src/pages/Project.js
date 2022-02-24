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
        <a href="#" className="picture">
          <img className="test" src="./IMG/gt.png" alt="profil "></img>
          <div className="text-block">
            <h4>Nature</h4>
            <p>What a beautiful sunrise</p>
          </div>
        </a>
        <a href="#" className="picture">
          <img className="test" src="./IMG/gt.png" alt="profil"></img>
        </a>
        <a href="#" className="picture">
          <img className="test" src="./IMG/gt.png" alt="profil "></img>
        </a>
        {/* <a className="picture"></a> 
        <a className="picture"></a> */}
      </div>
    </>
  );
};

export default About;
