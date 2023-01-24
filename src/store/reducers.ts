import { combineReducers } from 'redux';
import { filmReducer } from './film-reducer';
import { genreReducer } from './genre-reducer';

export const rootReducer = combineReducers({
  films: filmReducer,
  genres: genreReducer,
});
