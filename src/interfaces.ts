export interface FilmInterface {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface GenreInterface {
  id: number;
  name: string;
}

export interface UserInterface {
  login: string;
  password: string;
}

export interface StateInterface {
  films: {
    filtredFilms: FilmInterface[];
    genres: number[];
    initialFilms: FilmInterface[];
    sort: string;
    sortedFilms: FilmInterface[];
    userFilter: string;
    year: string;
    userList: {
      favorite: number[];
      soon: number[];
    };
  };
  genres: GenreInterface[];
  pagination: {
    currentPage: number;
    itemsCount: number;
  };
  user: {
    isLogged: boolean;
  };
}

export interface FilmListInterface {
  favorite: number[];
  soon: number[];
}
