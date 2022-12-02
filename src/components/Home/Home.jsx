import React from "react";
import "./home.css";
import profil from "../../image/pp.JPG";

export default function Home() {
  return (
    <>
    <div className="box"></div>
      <div className="main">
        <div className="mainLeft">
          <div className="mainLeftImg">
            <img src={profil} alt="" />
          </div>
          <div className="mainLeftInfo">
            <p className="F">Yasin</p>
            <p className="F">Kocadağlı</p>

            <p className="W">Web Developer</p>
          </div>
          <div className="mainLeftFooter">
            <i className="G fa-brands fa-github"></i>
            <i className="L fa-brands fa-linkedin"></i>
            <i className="I fa-brands fa-instagram"></i>
          </div>
        </div>
        <div className="mainRight">
          <div className="mainRightHead">
            <p>HELLO</p>
            <p>Here's who I am & what I do</p>
          </div>
          <div className="mainRightbody">
            <button> Resume</button>
            <button>Projects</button>
          </div>
          <div className="mainRightExp">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis
              dolorum esse voluptates. Autem fugiat dicta, officia omnis ipsa
              sequi ex molestiae repudiandae tenetur ab cum illo corporis?
              Commodi, nam et.
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis
              dolorum esse voluptates.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

//#5cbdb9
