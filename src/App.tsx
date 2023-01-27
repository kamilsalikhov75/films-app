import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './app.css';
import { Header } from './components/header/header';
import { LoginPopup } from './components/login-popup/login-popup';
import { path } from './const';
import { FilmPage } from './pages/film-page/film-page';
import { Main } from './pages/main/Main/main';

function App() {
  const [isActiveLoginPopup, setIsActiveLoginPopup] = useState(null);
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
        <Route
          path={`${path.film}:id`}
          element={<FilmPage/>}
        />
      </Routes>
    </>
  );
}

export default App;
