import './Films.css';

import { Film } from '../Film/Film';
import { useSelector } from 'react-redux';
import { imageUrl } from '../../const';
import { FilmInterface } from '../../interfaces';


function Films() {
  const films: FilmInterface[] = useSelector((state: any) => state.films);
  return (
    <div className="films__block">
      {films.map((film) => (
        <Film
          key={film.id}
          img={`${imageUrl}${film.poster_path || film.backdrop_path}`}
          voteAverage={film.vote_average}
          title={film.title}
        />
      ))}
    </div>
  );
}

export { Films };
