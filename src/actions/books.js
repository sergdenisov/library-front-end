import * as api from "../utils/api";

export const SET_BOOKS = "SET_BOOKS";
const setBooks = books => ({ type: SET_BOOKS, books });

export const getBooks = () => dispatch => {
  api.getBooks().then(books => {
    dispatch(setBooks(books));
  });
};

export const PUSH_BOOK = "PUSH_BOOK";
const pushBook = book => ({ type: PUSH_BOOK, book });

export const addBook = bookData => dispatch =>
  api.addBook(bookData).then(book => dispatch(pushBook(book)));
