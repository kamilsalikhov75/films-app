import './Checkbox.css';

function Checkbox({ id, text }: { id: string; text: string }) {
  return (
    <div className="checkbox__block">
      <input id={id} type="checkbox" className="checkbox" />
      <label htmlFor={id}>{text}</label>
    </div>
  );
}

export { Checkbox };
