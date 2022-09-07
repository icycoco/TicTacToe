import { useState } from "react";
import "./App.css";

function App() {
  const [turn, setTurn] = useState("X");

  const emptyBoard = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "],
  ];
  const [board, setBoard] = useState(emptyBoard);
  const [moves, setMoves] = useState(0);
  const [winner, setWinner] = useState(null);

  const resetBoard = () => {
    setBoard(emptyBoard);
    setMoves(0);
    setWinner(null);
    setTurn("X");
  };

  const checkForWinner = (row, col) => {
    if (
      board[row][0] === turn &&
      board[row][1] === turn &&
      board[row][2] === turn
    ) {
      return true;
    }
    if (
      board[0][col] === turn &&
      board[1][col] === turn &&
      board[2][col] === turn
    ) {
      return true;
    }
    if (board[0][0] === turn && board[1][1] === turn && board[2][2] === turn) {
      return true;
    }
    if (board[2][0] === turn && board[1][1] === turn && board[0][2] === turn) {
      return true;
    }
    return false;
  };

  const changeTurn = () => {
    turn === "X" ? setTurn("O") : setTurn("X");
  };

  const updateBoard = (row, col) => {
    if (board[row][col] !== " ") {
      return;
    }
    let newBoard = board;
    newBoard[row][col] = turn;
    setBoard(newBoard);
    setMoves(moves + 1);
    checkForWinner(row, col) ? setWinner(turn) : changeTurn();
  };

  const Square = ({ row, col }) => {
    return (
      <>
        <td key={col} onClick={() => updateBoard(row, col)}>
          {board[row][col]}
        </td>
      </>
    );
  };

  const Row = ({ rownum }) => {
    return (
      <tr row={rownum}>
        <Square row={rownum} col={0} />
        <Square row={rownum} col={1} />
        <Square row={rownum} col={2} />
      </tr>
    );
  };

  return (
    <div className="App">
      <div>Turn: {turn} </div>
      <div> Moves: {moves} </div>
      {winner && <div> {winner} Wins! </div>}
      {moves === 9 && !winner && <div> Game Over! Tie Game. </div>}
      <button onClick={() => resetBoard()}> Reset Board</button>
      <table>
        <Row rownum={0} />
        <Row rownum={1} />
        <Row rownum={2} />
      </table>
      <div />
    </div>
  );
}

export default App;
