import './main.css';

import { Filter } from '../../../components/filter/filter';
import { Films } from '../../../components/films/films';

function Main({ setIsActiveLoginPopup }: { setIsActiveLoginPopup: any }) {
  return (
    <section className="content">
      <div className="container content__container">
        <Filter />
        <Films setIsActiveLoginPopup={setIsActiveLoginPopup} />
      </div>
    </section>
  );
}

export { Main };
