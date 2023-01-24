import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="container header__container">
        <a href="#" className="header__link">
          Home
        </a>
        <button className="header__button">Login</button>
      </div>
    </header>
  );
}

export { Header };
