import * as api from "../utils/api";

export const SET_BOOKS = "SET_BOOKS";

const setBooks = books => ({
  type: SET_BOOKS,
  books
});

export const getBooks = () => dispatch => {
  api.getBooks().then(books => {
    dispatch(setBooks(books));
  });
};
