import './Filter.css';

import { Pagination } from '../Pagination/Pagination';
import { Checkbox } from '../Checkbox/Checkbox';

function Filter() {
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
        <Checkbox id="1" text="боевик"/>
        <Checkbox id="2" text="боевик"/>
        <Checkbox id="3" text="боевик"/>
        <Checkbox id="4" text="боевик"/>
        <Checkbox id="5" text="боевик"/>
        <Checkbox id="6" text="боевик"/>
      </div>
      <Pagination />
    </div>
  );
}

export { Filter };
