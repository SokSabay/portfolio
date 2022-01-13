import React from "react";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home flex">
        <h1>Mon Portfolio</h1>
        <div className="roundedImg">
          <img
            className="profilPicture"
            src="./IMG/baptisteProfil.png"
            alt="profil picture"
          ></img>
        </div>
      </div>
      <div className="about">
        <div className="content">
          <h2>Lorem ipsum dolor sit amet.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod sunt
            numquam molestiae ipsa ipsam ducimus eligendi blanditiis nesciunt
            sed neque?
          </p>
        </div>
        <div className="content">
          <h2>Lorem ipsum dolor sit amet.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod sunt
            numquam molestiae ipsa ipsam ducimus eligendi blanditiis nesciunt
            sed neque?
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
