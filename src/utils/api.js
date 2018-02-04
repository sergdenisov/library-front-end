const api = "http://localhost:3000/api";

const headers = {
  Accept: "application/json",
  "Content-Type": "application/json"
};

export const getBooks = () =>
  fetch(`${api}/books`, { headers })
    .then(res => res.json())
    .then(books => books);

export const addBook = bookData =>
  fetch(`${api}/books`, {
    method: "POST",
    headers,
    body: JSON.stringify(bookData)
  })
    .then(res => res.json())
    .then(book => book);
