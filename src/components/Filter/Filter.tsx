import './filter.css';

import { Pagination } from '../pagination/pagination';
import { Checkbox } from '../checkbox/checkbox';
import { useDispatch, useSelector } from 'react-redux';
import { GenreInterface, StateInterface } from '../../interfaces';
import { sort, userFilter, years } from '../../const';
import {
  CHANGE_SORT,
  CHANGE_USER_FILTER,
  CHANGE_YEAR,
  RESET_FILTERS,
  RESET_PAGE,
} from '../../store/actions';
import React from 'react';

const key = 0;
const value = 1;

function Filter() {
  const genres: GenreInterface[] = useSelector(
    (state: StateInterface) => state.genres
  );
  const currentSort = useSelector((state: StateInterface) => state.films.sort);
  const currentYear = useSelector((state: StateInterface) => state.films.year);
  const currentUserFilter = useSelector(
    (state: StateInterface) => state.films.userFilter
  );
  const isLogged = useSelector((state: StateInterface) => state.user.isLogged);

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

  function userFilterChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const userFilter = e.currentTarget.value;
    

    dispatch({
      type: CHANGE_USER_FILTER,
      payload: {
        userFilter,
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

      {isLogged ? (
        <div className="select__block">
          <select
            className="filter__select"
            onChange={userFilterChange}
            value={currentUserFilter}
          >
            {Object.entries(userFilter).map((item) => (
              <option key={item[key]} value={item[key]}>
                {item[value]}
              </option>
            ))}
          </select>
        </div>
      ) : null}

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
