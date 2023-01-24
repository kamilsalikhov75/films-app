import './Main.css';

import { Films } from '../../../components/films/Films';
import { Filter } from '../../../components/filter/Filter';

function Main() {
  return (
    <section className="content">
      <div className="container content__container">
        <Filter />
        <Films />
      </div>
    </section>
  );
}

export { Main };
