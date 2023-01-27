import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import './app.css';
import { Header } from './components/header/header';
import { LoginPopup } from './components/login-popup/login-popup';
import { path } from './const';
import { isValidUser } from './helpers';
import { getUser } from './local-storage';
import { FilmPage } from './pages/film-page/film-page';
import { Main } from './pages/main/main/main';
import { LOG_IN } from './store/actions';

function App() {
  const dispatch = useDispatch();
  const [isActiveLoginPopup, setIsActiveLoginPopup] = useState(null);
  const [user] = useState(getUser());

  useEffect(() => {
    if (isValidUser(user)) {
      dispatch({
        type: LOG_IN,
      });
    }
  }, []);

  return (
    <>
      <Header setIsActiveLoginPopup={setIsActiveLoginPopup} />
      <LoginPopup
        isActiveLoginPopup={isActiveLoginPopup}
        setIsActiveLoginPopup={setIsActiveLoginPopup}
      />
      <Routes>
        <Route
          path={path.main}
          element={<Main setIsActiveLoginPopup={setIsActiveLoginPopup} />}
        />
        <Route path={`${path.film}:id`} element={<FilmPage />} />
      </Routes>
    </>
  );
}

export default App;
