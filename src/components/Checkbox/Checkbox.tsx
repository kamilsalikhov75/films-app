import './Checkbox.css';

function Checkbox({ id, text }: { id: number; text: string }) {
  return (
    <div className="checkbox__block">
      <input id={id.toString()} type="checkbox" className="checkbox" />
      <label htmlFor={id.toString()}>{text}</label>
    </div>
  );
}

export { Checkbox };
