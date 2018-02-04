import React from "react";
import "./Main.css";
import Books from "../Books/Books";

function Main() {
  return (
    <main className="main">
      <h1 className="main__header">Книги</h1>
      <div className="columns main__content">
        <Books />
      </div>
    </main>
  );
}

export default Main;
