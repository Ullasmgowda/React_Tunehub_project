import React from "react";
import { Link } from "react-router-dom";
import "./Index.css";

export default function Index() {
  return (
    <section className="index-page">
      <div className="centered-content">
        <h1>Welcome to MusicApp</h1>
        <p>Your gateway to endless music exploration!</p>
        <div className="hero-buttons">
          <Link to="/login" className="btn login-btn">Login</Link>
          <Link to="/Registration" className="btn signup-btn">Sign Up</Link>
        </div>
      </div>
    </section>
  );
}
