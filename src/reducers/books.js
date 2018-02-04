import { SET_BOOKS } from "../actions/books";

function books(state = [], action) {
  switch (action.type) {
    case SET_BOOKS:
      return [...action.books];
    default:
      return state;
  }
}

export default books;
