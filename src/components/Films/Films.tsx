import './Films.css';

import { Film } from '../Film/Film';

function Films() {
  return (
    <div className="films__block">
      <Film />
      <Film />
      <Film />
      <Film />
      <Film />
      <Film />
    </div>
  );
}

export { Films };
