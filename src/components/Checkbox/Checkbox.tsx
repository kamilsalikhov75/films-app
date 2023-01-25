import { useDispatch, useSelector } from 'react-redux';
import { ADD_GENRE, DELETE_GENRE } from '../../store/actions';
import './Checkbox.css';

function Checkbox({ id, text }: { id: number; text: string }) {
  const currentGenres = useSelector((state: any) => state.films.genres);
  const dispatch = useDispatch();
  const isChecked = currentGenres.includes(id);

  function addGenre() {
    console.log(isChecked);

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
