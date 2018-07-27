import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="columns">
      <nav className="column navbar header">
        <section className="navbar-section">
          <a href="/" className="navbar-brand">
            HH Library
          </a>
        </section>
        <section className="navbar-section">
          <button type="button" className="btn btn-primary">
            Войти
          </button>
        </section>
      </nav>
    </header>
  );
}

export default Header;
