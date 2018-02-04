const api = "http://localhost:3000/api";

export const getBooks = () =>
  fetch(`${api}/books`)
    .then(res => res.json())
    .then(books => books);
