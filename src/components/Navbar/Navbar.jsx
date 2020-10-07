import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="info">
        <h1 style={{ margin: 0 }}>Kevin Xu</h1>
        <div className="info-bar">
          <p className="info-item">kxu@college.harvard.edu</p>
        </div>
        <div className="info-bar">
          <Link
            className="info-link"
            to={{ pathname: "https://www.instagram.com/kevin_b_xu/" }}
            target = "_blank"
          >
            Instagram
          </Link>
          <Link
            className="info-link"
            to={{ pathname: "https://www.facebook.com/kevin.xu.98284566/" }}
            target = "_blank"
          >
            Facebook
          </Link>
          <Link
            className="info-link"
            to={{ pathname: "https://github.com/KevinBXu" }}
            target = "_blank"
          >
            Github
          </Link>
        </div>
      </div>
      <div className="nav-background">
        <Link className="nav-link" to={{ pathname: "/about" }}>About</Link>
        <Link className="nav-link" to={{ pathname: "/experience" }}>Experiences</Link>
        <Link className="nav-link" to={{ pathname: "/projects" }}>Projects</Link>
      </div>
    </>
  );
}
