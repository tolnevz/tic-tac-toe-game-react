export default function GameBoard({ onSelectSquare, board }) {
  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((symbol, symbolIndex) => (
              <li key={symbolIndex}>
                <button onClick={() => onSelectSquare(rowIndex, symbolIndex)} disabled={Boolean(symbol)}>
                  {symbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
