import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import { useState } from "react";

function App() {
  const [currentPlayerSymbol, setCurrentPlayerSymbol] = useState("X");
  function handleSelectCell() {
    setCurrentPlayerSymbol((prev) => (prev === "X" ? "O" : "X"));
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player 1"
            symbol="X"
            isActive={currentPlayerSymbol === "X"}
          />
          <Player
            initialName="Player 2"
            symbol="O"
            isActive={currentPlayerSymbol === "O"}
          />
        </ol>
        <GameBoard
          onSelectCell={handleSelectCell}
          currentPlayerSymbol={currentPlayerSymbol}
        />
      </div>
    </main>
  );
}

export default App;
