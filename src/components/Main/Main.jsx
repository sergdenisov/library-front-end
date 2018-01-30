import React from "react";
import "./Main.css";
import Book from "../Book/Book";

function Main() {
  return (
    <main className="main">
      <h1 className="main__header">Книги</h1>
      <div className="columns main__content">
        <div className="column col-3 mb-2">
          <Book
            title="Название книги"
            description="Описание книги"
            authors={[{ id: 1, text: "Имя автора 1" }]}
            tags={[{ id: 1, text: "Тег 1" }]}
            year="2007"
            link="https://hh.ru"
            countTotal={3}
            countCurrent={2}
          />
        </div>
      </div>
    </main>
  );
}

export default Main;
