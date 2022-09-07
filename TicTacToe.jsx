function App() {
	const [turn, setTurn] = React.useState("X");
	const changeTurn = () => {
		turn === "X" ? setTurn("O") : setTurn("X");
	};
	// const newBoard = new Array(3).map(() => new Array(3).fill(" "));
	const [board, setBoard] = React.useState([
		[" ", " ", " "],
		[" ", " ", " "],
		[" ", " ", " "]
	]);

	const Square = ({ row, col, turn, changeTurn, board, setBoard }) => {
		const clickHandler = () => {
			// const updatedboard = board;
			// updatedboard[row][col] = turn;
			// setBoard(updatedboard);
			// changeTurn();
			// checkBoard();
		};

		return (
			<>
				<td key={col} onClick={clickHandler}>
					{board[row-1][col-1]}
				</td>
			</>
		);
	};

	const Row = ({ rownum, turn, changeTurn, board, setBoard }) => {
		return (
			<tr row={rownum}>
				<Square
					row={rownum}
					col={1}
					turn={turn}
					changeTurn={changeTurn}
					board={board}
					setBoard={setBoard}
				/>
				<Square
					row={rownum}
					col={2}
					turn={turn}
					changeTurn={changeTurn}
					board={board}
					setBoard={setBoard}
				/>
				<Square
					row={rownum}
					col={3}
					turn={turn}
					changeTurn={changeTurn}
					board={board}
					setBoard={setBoard}
				/>
			</tr>
		);
	};

	return (
		<>
			<div>Turn: {turn} </div>
			<table>
				<Row
					rownum={1}
					turn={turn}
					changeTurn={changeTurn}
					board={board}
					setBoard={setBoard}
				/>
				<Row
					rownum={2}
					turn={turn}
					changeTurn={changeTurn}
					board={board}
					setBoard={setBoard}
				/>
				<Row
					rownum={3}
					turn={turn}
					changeTurn={changeTurn}
					board={board}
					setBoard={setBoard}
				/>
			</table>
		</>
	);
}

ReactDOM.render(<App />, document.getElementById("root"));
