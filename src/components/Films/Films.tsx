import './Films.css';

import { Film } from '../film/Film';
import { useSelector } from 'react-redux';
import { imageUrl } from '../../const';
import { FilmInterface } from '../../interfaces';

function Films() {
  const films: FilmInterface[] = useSelector(
    (state: any) => state.films.filtredFilms
  );
  const itemsCount = useSelector((state: any) => state.pagination.itemsCount);
  const lastPageItem = useSelector(
    (state: any) => state.pagination.currentPage * itemsCount
  );
  const firstPageItem = lastPageItem - itemsCount;

  return (
    <div className="films__block">
      {films.slice(firstPageItem, lastPageItem).map((film) => (
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
