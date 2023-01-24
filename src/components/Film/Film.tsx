import './Film.css';
import img from '../../assets/demon-slayer.jpg';

function Film() {
  return (
    <div className="film__block">
      <img src={img} alt="обложка фильма" className="film__img" />
      <div className="film__info">
        <div className="film__info-top">
          <p className="film__info-text">Рейтинг: 8.4</p>
          <button className="film__info-button">
            <svg
              width="24"
              height="23"
              viewBox="0 0 24 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.3646 0.77312L7.5304 6.51965L1.18926 7.44413C0.052104 7.60906 -0.403625 9.01097 0.421028 9.81392L5.0087 14.2844L3.92363 20.5995C3.72832 21.741 4.93058 22.596 5.93752 22.0622L11.6103 19.0804L17.283 22.0622C18.29 22.5917 19.4922 21.741 19.2969 20.5995L18.2118 14.2844L22.7995 9.81392C23.6242 9.01097 23.1684 7.60906 22.0313 7.44413L15.6901 6.51965L12.8559 0.77312C12.3481 -0.251186 10.8768 -0.264207 10.3646 0.77312Z"
                fill="black"
              />
            </svg>
          </button>
          <button className="film__info-button">
            <svg
              width="19"
              height="25"
              viewBox="0 0 19 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 25V2.34375C0 1.04932 1.04932 0 2.34375 0H16.4062C17.7007 0 18.75 1.04932 18.75 2.34375V25L9.375 19.5312L0 25Z"
                fill="black"
              />
            </svg>
          </button>
        </div>
        <h4 className="film__title">Demon Slayer KIMETSU NO YAIBA</h4>
        <button className="film__button">Подробнее</button>
      </div>
    </div>
  );
}

export { Film };
