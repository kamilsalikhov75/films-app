import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { paginationButtonClass } from '../../const';
import { NEXT_PAGE, PREV_PAGE } from '../../store/actions';
import './pagination.css';
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

  const [prevButtonClass, setPrevButtonClass] = useState(
    getPrevButtonClass(currentPage)
  );
  const [nextButtonClass, setNextButtonClass] = useState(
    getNextButtonClass(currentPage, pagesCount)
  );

  function nextPageClick() {
    if (currentPage < pagesCount) {
      dispatch({
        type: NEXT_PAGE,
      });
      setNextButtonClass(getNextButtonClass(currentPage + 1, pagesCount));
      setPrevButtonClass(getPrevButtonClass(currentPage + 1));
    }
  }
  function prevPageClick() {
    if (currentPage > firstPage) {
      dispatch({
        type: PREV_PAGE,
      });
      setNextButtonClass(getNextButtonClass(currentPage - 1, pagesCount));
      setPrevButtonClass(getPrevButtonClass(currentPage - 1));
    }
  }

  return (
    <div className="pagination__block">
      <div className="pagination__buttons">
        <button onClick={prevPageClick} className={prevButtonClass}>
          Назад
        </button>
        <button onClick={nextPageClick} className={nextButtonClass}>
          Вперед
        </button>
      </div>
      <p className="pagination__text">
        {currentPage} of {pagesCount}
      </p>
    </div>
  );
}

function getPrevButtonClass(currentPage: number) {
  if (currentPage === firstPage) {
    return paginationButtonClass.prev.disabled;
  }
  return paginationButtonClass.prev.default;
}

function getNextButtonClass(currentPage: number, pagesCount: number) {
  if (currentPage === pagesCount) {
    return paginationButtonClass.next.disabled;
  }
  return paginationButtonClass.next.default;
}

export { Pagination };
