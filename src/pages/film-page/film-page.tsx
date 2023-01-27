import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { imageUrl } from '../../const';
import { FilmInterface, GenreInterface } from '../../interfaces';

import './film-page.css';

function FilmPage() {
  const { id } = useParams();
  const genres = useSelector((state: any) => state.genres);
  const film = useSelector((state: any) =>
    state.films.initialFilms.find(
      (film: FilmInterface) => film.id.toString() === id
    )
  );
  console.log(genres);

  console.log(film);

  return (
    <div
      className="film"
      style={{
        backgroundImage: `url(${imageUrl}${
          film.backdrop_path || film.poster_path
        })`,
      }}
    >
      <div className="container">
        <div className="film__top">
          <img
            src={`${imageUrl}${film.poster_path}`}
            alt=""
            className="film__image"
          />
          <div className="film__info">
            <h1 className="film__title">{film.title}</h1>
            <p className="film__text">Рейтинг: {film.vote_average}</p>
            <p className="film__text">Количество голосов: {film.vote_count}</p>
            <p className="film__text">{film.overview}</p>
          </div>
        </div>
        <div className="film__content">
          <div className="film__content-block">
            <p className="film__content-text">Жанры</p>
            <div className="genres">
              {film.genre_ids.map((genreId: number) => (
                <p key={genreId} className="film__genre">
                  {
                    genres.find((genre: GenreInterface) => genre.id === genreId)
                      .name
                  }
                </p>
              ))}
            </div>
          </div>
          <div className="film__content-block">
            <p className="film__content-text">Оригинальное название</p>
            <div className="genres">
              <p className="film__genre">{film.original_title}</p>
            </div>
          </div>
          <div className="film__content-block">
            <p className="film__content-text">Оригинальный язык</p>
            <div className="genres">
              <p className="film__genre">{film.original_language}</p>
            </div>
          </div>
          <div className="film__content-block">
            <p className="film__content-text">Дата выхода</p>
            <div className="genres">
              <p className="film__genre">{film.release_date}</p>
            </div>
          </div>
          <div className="film__content-block">
            <p className="film__content-text">Популярность</p>
            <div className="genres">
              <p className="film__genre">{film.popularity}</p>
            </div>
          </div>
          <div className="film__content-block">
            <p className="film__content-text">Видео</p>
            <div className="genres">
              {film.vider ? null : <p className="film__genre">Видео нет</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { FilmPage };
