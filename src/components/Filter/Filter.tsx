import './Filter.css';

import { Pagination } from '../pagination/Pagination';
import { Checkbox } from '../checkbox/Checkbox';
import { useDispatch, useSelector } from 'react-redux';
import { GenreInterface } from '../../interfaces';
import { sort, years } from '../../const';
import {
  CHANGE_SORT,
  CHANGE_YEAR,
  RESET_FILTERS,
  RESET_PAGE,
} from '../../store/actions';
import React from 'react';

const key = 0;
const value = 1;

function Filter() {
  const genres: GenreInterface[] = useSelector((state: any) => state.genres);
  const currentSort = useSelector((state: any) => state.films.sort);
  const currentYear = useSelector((state: any) => state.films.year);

  const dispatch = useDispatch();

  function sortChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const sort = e.currentTarget.value;

    dispatch({
      type: CHANGE_SORT,
      payload: {
        sort,
      },
    });
  }

  function yearChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const year = e.currentTarget.value;

    dispatch({
      type: CHANGE_YEAR,
      payload: {
        year,
      },
    });
    dispatch({
      type: RESET_PAGE,
    });
  }

  function resetFilters() {
    dispatch({
      type: RESET_FILTERS,
    });
  }

  return (
    <div className="filter__block">
      <h3 className="filter__block-title">Фильтры:</h3>
      <button className="filter__button" onClick={resetFilters}>
        Сбросить все фильтры
      </button>
      <div className="select__block">
        <label htmlFor="sortSelect">Сортировать по:</label>
        <select
          id="sortSelect"
          className="filter__select"
          onChange={sortChange}
          value={currentSort}
        >
          {Object.entries(sort).map((item) => (
            <option key={item[key]} value={item[key]}>
              {item[value]}
            </option>
          ))}
        </select>
      </div>
      <div className="select__block">
        <label htmlFor="yearSelect">Год релиза:</label>
        <select
          id="yearSelect"
          className="filter__select"
          onChange={yearChange}
          value={currentYear}
        >
          {years.map((value) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
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
