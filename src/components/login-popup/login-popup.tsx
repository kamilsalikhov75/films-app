import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { errorMessage, placeholder } from '../../const';
import { isValidUser } from '../../helpers';
import { saveUser } from '../../local-storage';
import { user } from '../../mocks/user';
import { LOG_IN } from '../../store/actions';
import './login-popup.css';

function LoginPopup({
  isActiveLoginPopup,
  setIsActiveLoginPopup,
}: {
  isActiveLoginPopup: any;
  setIsActiveLoginPopup: any;
}) {
  const dispatch = useDispatch();

  const [loginPlaceholder] = useState(placeholder.login);
  const [passwordPlaceholder] = useState(placeholder.password);
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [isError, setIsError] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (isValidUser({ login, password })) {
      dispatch({
        type: LOG_IN,
      });
      setIsActiveLoginPopup(false);
      saveUser({ login, password });
    } else {
      setIsError(true);
    }
  }

  function handleClick(e: any) {
    if (e.target.className === 'popup') {
      setIsActiveLoginPopup(false);
      setIsError(false);
    }
  }

  function handleChange(e: any) {
    const inputType = e.target.placeholder;
    const inputValue = e.target.value;
    switch (inputType) {
      case placeholder.login:
        setLogin(inputValue);
        break;
      case placeholder.password:
        setPassword(inputValue);
        break;
      default:
        break;
    }
  }
  return isActiveLoginPopup ? (
    <div className="popup" onClick={handleClick}>
      <form className="popup__form" onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          className="popup__input"
          placeholder={loginPlaceholder}
        />
        <input
          onChange={handleChange}
          type="text"
          className="popup__input"
          placeholder={passwordPlaceholder}
        />
        <input type="submit" className="popup__input" />
        {isError ? <p className="popup__text">{errorMessage.login}</p> : null}
      </form>
    </div>
  ) : null;
}

export { LoginPopup };
