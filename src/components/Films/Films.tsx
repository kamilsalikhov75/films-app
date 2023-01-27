import './Films.css';

import { Film } from '../film/film';
import { useSelector } from 'react-redux';
import { imageUrl } from '../../const';
import { FilmInterface } from '../../interfaces';

function Films({ setIsActiveLoginPopup }: { setIsActiveLoginPopup: any }) {
  const itemsCount = useSelector((state: any) => state.pagination.itemsCount);
  const lastPageItem = useSelector(
    (state: any) => state.pagination.currentPage * itemsCount
  );
  const firstPageItem = lastPageItem - itemsCount;
  const films: FilmInterface[] = useSelector(
    (state: any) => state.films.filtredFilms
  );
  const sort = useSelector((state: any) => state.films.sort);

  return (
    <div className="films__block">
      {films.slice(firstPageItem, lastPageItem).map((film) => (
        <Film
          key={film.id}
          id={film.id}
          img={`${imageUrl}${film.poster_path || film.backdrop_path}`}
          voteAverage={film.vote_average}
          title={film.title}
          setIsActiveLoginPopup={setIsActiveLoginPopup}
        />
      ))}
    </div>
  );
}

export { Films };
