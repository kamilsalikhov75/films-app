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
  favoriteFilms: number[];
  soonFilms: number[];
}
