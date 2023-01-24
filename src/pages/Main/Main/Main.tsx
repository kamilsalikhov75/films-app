import './Main.css';

import { Films } from '../../../components/Films/Films';
import { Filter } from '../../../components/Filter/Filter';

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
