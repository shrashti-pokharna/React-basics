import "../App.css";
export default function Square({ value, onSquareClick, result }) {
  return (
    <button className={`square ${result}`} onClick={onSquareClick}>
      {value}
    </button>
  );
}
