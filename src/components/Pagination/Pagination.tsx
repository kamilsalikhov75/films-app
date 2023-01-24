import { useDispatch, useSelector } from 'react-redux';
import './Pagination.css';

const firstPage = 1;

function Pagination() {
  const dispatch = useDispatch();

  const currentPage = useSelector((state: any) => state.pagination.currentPage);
  const pageItemsCount = useSelector(
    (state: any) => state.pagination.itemsCount
  );
  const filmsCount = useSelector(
    (state: any) => state.films.filtredFilms.length
  );
  const pagesCount = Math.ceil(filmsCount / pageItemsCount);

  function nextPageClick() {
    if (currentPage < pagesCount) {
      dispatch({
        type: 'NEXT_PAGE',
      });
    }
  }
  function prevPageClick() {
    if (currentPage > firstPage) {
      dispatch({
        type: 'PREV_PAGE',
      });
    }
  }

  return (
    <div className="pagination__block">
      <div className="pagination__buttons">
        <button
          onClick={prevPageClick}
          className="pagination__button pagination__button--left pagination__button--disabled"
        >
          Назад
        </button>
        <button
          onClick={nextPageClick}
          className="pagination__button pagination__button--right"
        >
          Вперед
        </button>
      </div>
      <p className="pagination__text">
        {currentPage} of {pagesCount}
      </p>
    </div>
  );
}

export { Pagination };
