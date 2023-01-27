import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { LOG_OUT } from '../../store/actions';
import './header.css';

function Header({ setIsActiveLoginPopup }: { setIsActiveLoginPopup: any }) {
  const dispatch = useDispatch();
  const isLogged = useSelector((state: any) => state.user.isLogged);

  function handleClick() {
    if (isLogged) {
      dispatch({
        type: LOG_OUT,
      });
    } else {
      setIsActiveLoginPopup(true);
    }
  }

  return (
    <header className="header">
      <div className="container header__container">
        <Link to="/" className="header__link">
          Главная
        </Link>
        <button className="header__button" onClick={handleClick}>
          {isLogged ? 'Выйти' : 'Войти'}
        </button>
      </div>
    </header>
  );
}

export { Header };
