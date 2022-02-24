import React from "react";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home flex">
        <div>
          <h1>Baptiste Chenot</h1>
          <h2>Développeur WEB</h2>
        </div>

        <div className="roundedImg">
          <img
            className="profilPicture"
            src="./IMG/baptisteProfil.png"
            alt="profil "
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
        <div className="content f2">
          <h2>Lorem ipsum dolor sit amet.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod sunt
            numquam molestiae ipsa ipsam ducimus eligendi blanditiis nesciunt
            sed neque?
          </p>
        </div>
      </div>
      <div className="icon">
        <img className="" src="./img/js.png" alt="icône JavaScript" />
        <img className="" src="./img/css.png" alt="icône JavaScript" />
        <img className="" src="./img/git.png" alt="icône JavaScript" />
        <img className="" src="./img/html.png" alt="icône JavaScript" />
        <img className="" src="./img/mongodb.png" alt="icône JavaScript" />
        <img className="" src="./img/mysql.png" alt="icône JavaScript" />
        <img className="" src="./img/nodejs.png" alt="icône JavaScript" />
      </div>
    </>
  );
};

export default Home;
