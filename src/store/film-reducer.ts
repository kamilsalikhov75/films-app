import { films } from '../mocks/films';
import { CHANGE_SORT, CHANGE_YEAR, RESET_FILTERS } from './actions';
import { FilmInterface } from '../interfaces';
import { AnyAction } from 'redux';
const defaultSort = 'popularityDesc';
const defaultYear = '2020';
const initialState = {
  intialFilms: films,
  filtredFilms: filterByYear(defaultYear, films),
  sort: defaultSort,
  year: defaultYear,
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
        sort,
      };
    case CHANGE_YEAR:
      const year = action.payload.year;

      return {
        ...state,
        filtredFilms: filterByYear(year, state.intialFilms),
        year,
      };
    case RESET_FILTERS:
      return {
        ...state,
        filtredFilms: filterByYear(defaultYear, state.intialFilms),
        sort: defaultSort,
        year: defaultYear,
        genres: [],
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

function getYear(date: string) {
  return date.split('-')[0];
}
