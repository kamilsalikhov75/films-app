import './Pagination.css'

function Pagination(){
  return(
    <div className="pagination__block">
      <div className="pagination__buttons">
        <button className="pagination__button pagination__button--left pagination__button--disabled">
          Назад
        </button>
        <button className="pagination__button pagination__button--right">
          Вперед
        </button>
      </div>
      <p className="pagination__text">
        1 of 1455
      </p>
    </div>
  )
}

export {Pagination}