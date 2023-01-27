import { combineReducers } from 'redux';
import { filmReducer } from './film-reducer';
import { genreReducer } from './genre-reducer';
import { paginationReducer } from './pagination-reducer';
import { userReducer } from './user-reducer';

export const rootReducer = combineReducers({
  films: filmReducer,
  genres: genreReducer,
  pagination: paginationReducer,
  user: userReducer,
});
