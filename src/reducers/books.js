import { SET_BOOKS, PUSH_BOOK } from "../actions/books";

function books(state = [], action) {
  switch (action.type) {
    case SET_BOOKS:
      return [...action.books];
    case PUSH_BOOK:
      return [...state, action.book];
    default:
      return state;
  }
}

export default books;
