import { useDispatch, useSelector } from 'react-redux';
import { StateInterface } from '../../interfaces';
import { ADD_GENRE, DELETE_GENRE, RESET_PAGE } from '../../store/actions';
import './checkbox.css';

function Checkbox({ id, text }: { id: number; text: string }) {
  const currentGenres = useSelector(
    (state: StateInterface) => state.films.genres
  );
  const dispatch = useDispatch();
  const isChecked = currentGenres.includes(id);

  function addGenre() {
    if (currentGenres.includes(id)) {
      dispatch({
        type: DELETE_GENRE,
        payload: {
          id,
        },
      });
    } else {
      dispatch({
        type: ADD_GENRE,
        payload: {
          id,
        },
      });
    }
    dispatch({
      type: RESET_PAGE,
    });
  }
  return (
    <div className="checkbox__block">
      <input
        id={id.toString()}
        type="checkbox"
        className="checkbox"
        onChange={addGenre}
        checked={isChecked}
      />
      <label htmlFor={id.toString()}>{text}</label>
    </div>
  );
}

export { Checkbox };
