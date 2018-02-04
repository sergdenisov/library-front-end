import React, { Fragment } from "react";
import Book from "../Book/Book";

function Books() {
  return (
    <Fragment>
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
    </Fragment>
  );
}

export default Books;
