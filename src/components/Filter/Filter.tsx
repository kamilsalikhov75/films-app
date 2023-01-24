import './Filter.css';

import { Pagination } from '../Pagination/Pagination';
import { Checkbox } from '../Checkbox/Checkbox';
import { useSelector } from 'react-redux';
import { GenreInterface } from '../../interfaces';

function Filter() {
  const genres: GenreInterface[] = useSelector((state: any) => state.genres);
  return (
    <div className="filter__block">
      <h3 className="filter__block-title">Фильтры:</h3>
      <button className="filter__button">Сбросить все фильтры</button>
      <div className="select__block">
        <label htmlFor="sortSelect">Сортировать по:</label>
        <select id="sortSelect" className="filter__select">
          <option value="Популярные по убыванию">Популярные по убыванию</option>
          <option value="Популярные по возразтанию">
            Популярные по возрастанию
          </option>
        </select>
      </div>
      <div className="select__block">
        <label htmlFor="yearSelect">Год релиза:</label>
        <select id="yearSelect" className="filter__select">
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>

      <div className="checkboxes__block">
        {genres.map((genre) => (
          <Checkbox key={genre.id} id={genre.id} text={genre.name} />
        ))}
      </div>
      <Pagination />
    </div>
  );
}

export { Filter };
