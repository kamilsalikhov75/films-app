import { films } from '../mocks/films';
import {
  ADD_FAVORITE_FILM,
  ADD_GENRE,
  ADD_SOON_FILM,
  CHANGE_SORT,
  CHANGE_USER_FILTER,
  CHANGE_YEAR,
  DELETE_FAVORITE_FILM,
  DELETE_GENRE,
  DELETE_SOON_FILM,
  RESET_FILTERS,
} from './actions';
import { FilmInterface } from '../interfaces';
import { AnyAction } from 'redux';
import { getFilmList } from '../local-storage';

const defaultSort = 'popularityDesc';
const defaultYear = '2020';
const defaultUserFilter = 'all';
const defaultUserList = {
  favorite: [],
  soon: [],
};

const initialState = {
  initialFilms: films,
  sortedFilms: filterByYear(defaultYear, films),
  filtredFilms: filterByYear(defaultYear, films),
  sort: defaultSort,
  year: defaultYear,
  userFilter: defaultUserFilter,
  genres: [],
  userList:  getFilmList() ||defaultUserList,
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
      console.log(getFilmList());
      
      return {
        ...state,
        filtredFilms: filterByUserFilter(
          userFilter,
          state.sortedFilms,
          state.userList
        ),
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
      return initialState;

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
    case ADD_FAVORITE_FILM:
      return {
        ...state,
        userList: {
          ...state.userList,
          favorite: [...state.userList.favorite, action.payload.id],
        },
      };
    case ADD_SOON_FILM:
      return {
        ...state,
        userList: {
          ...state.userList,
          soon: [...state.userList.soon, action.payload.id],
        },
      };
    case DELETE_FAVORITE_FILM:
      const favoriteList = {
        ...state.userList,
        favorite: state.userList.favorite.filter(
          (id: number) => id !== action.payload.id
        ),
      };
      return {
        ...state,
        filtredFilms: filterByUserFilter(
          state.userFilter,
          state.sortedFilms,
          favoriteList
        ),
        sortedFilms: filterByUserFilter(
          state.userFilter,
          state.sortedFilms,
          favoriteList
        ),
        userList: favoriteList,
      };
    case DELETE_SOON_FILM:
      const soonList = {
        ...state.userList,
        soon: state.userList.soon.filter((id:number) => id !== action.payload.id),
      };
      return {
        ...state,
        filtredFilms: filterByUserFilter(
          state.userFilter,
          state.sortedFilms,
          soonList
        ),
        sortedFilms: filterByUserFilter(
          state.userFilter,
          state.sortedFilms,
          soonList
        ),
        userList: soonList,
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

function filterByUserFilter(
  filter: string,
  films: FilmInterface[],
  userList: { [favorite: string]: number[] }
) {
  if (filter === defaultUserFilter) {
    return films;
  }
  return films.filter((film) => userList[filter].includes(film.id));
}
