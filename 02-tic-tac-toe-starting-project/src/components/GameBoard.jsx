import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ onSelectCell, currentPlayerSymbol }) {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);
  function handleSelectCell(rowIndex, cellIndex) {
    setGameBoard((prev) => {
      const updatedGameBoard = [...prev.map((row) => [...row])];
      updatedGameBoard[rowIndex][cellIndex] = currentPlayerSymbol;
      return updatedGameBoard;
    });
    onSelectCell();
  }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((cellValue, cellIndex) => (
              <li key={cellIndex}>
                <button onClick={() => handleSelectCell(rowIndex, cellIndex)}>
                  {cellValue}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
