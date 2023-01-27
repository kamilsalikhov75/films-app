import { films } from '../mocks/films';
import {
  ADD_GENRE,
  CHANGE_SORT,
  CHANGE_USER_FILTER,
  CHANGE_YEAR,
  DELETE_GENRE,
  RESET_FILTERS,
} from './actions';
import { FilmInterface } from '../interfaces';
import { AnyAction } from 'redux';

const defaultSort = 'popularityDesc';
const defaultYear = '2020';
const defaultUserFilter = 'all';

const initialState = {
  initialFilms: films,
  sortedFilms: filterByYear(defaultYear, films),
  filtredFilms: filterByYear(defaultYear, films),
  sort: defaultSort,
  year: defaultYear,
  userFilter: defaultUserFilter,
  genres: [],
};

export function filmReducer(
  state = initialState,
  action: { type: string; payload: AnyAction }
) {
  switch (action.type) {
    case CHANGE_SORT:
      const sort = action.payload.sort;

      return {
        ...state,
        filtredFilms: sortArr(sort, state.filtredFilms),
        sortedFilms: sortArr(sort, state.sortedFilms),
        sort,
      };
    case CHANGE_USER_FILTER:
      const userFilter = action.payload.userFilter;

      return {
        ...state,
        userFilter,
      };
    case CHANGE_YEAR:
      const year = action.payload.year;

      return {
        ...state,
        filtredFilms: sortArr(
          state.sort,
          filterByYear(year, state.initialFilms)
        ),
        sortedFilms: sortArr(
          state.sort,
          filterByYear(year, state.initialFilms)
        ),
        year,
      };
    case RESET_FILTERS:
      return {
        ...state,
        filtredFilms: filterByYear(defaultYear, state.initialFilms),
        sort: defaultSort,
        year: defaultYear,
        genres: [],
      };

    case ADD_GENRE:
      return {
        ...state,
        filtredFilms: filterByGenre(
          [...state.genres, action.payload.id],
          state.sortedFilms
        ),
        genres: [...state.genres, action.payload.id],
      };
    case DELETE_GENRE:
      const genres = state.genres.filter(
        (genreId) => genreId !== action.payload.id
      );
      return {
        ...state,
        filtredFilms: filterByGenre(genres, state.sortedFilms),
        genres,
      };

    default:
      return state;
  }
}

function sortArr(sortType: string, films: FilmInterface[]) {
  switch (sortType) {
    case 'popularityAsc':
      return films.sort((a, b) => a.popularity - b.popularity);
    case 'popularityDesc':
      return films.sort((a, b) => b.popularity - a.popularity);
    case 'rateAsc':
      return films.sort((a, b) => a.vote_average - b.vote_average);
    case 'rateDesc':
      return films.sort((a, b) => b.vote_average - a.vote_average);
    default:
      return films;
  }
}

function filterByYear(year: string, films: FilmInterface[]) {
  return films.filter((film) => getYear(film.release_date) === year);
}

function filterByGenre(genres: number[], films: FilmInterface[]) {
  if (genres.length) {
    return films.filter((film) =>
      film.genre_ids.some((genreId) => genres.includes(genreId))
    );
  }
  return films;
}

function getYear(date: string) {
  return date.split('-')[0];
}
