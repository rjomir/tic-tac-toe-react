import Square from "../components/Square";
import {GAME_STATUS} from "../util";

interface Props {
    board: string[];

    handleClick(index: number): void;

    restart(newPlayers: boolean): void;

    currentPlayer: string;
    winner: string | null;
    status: GAME_STATUS
}

const Board = (props: Props) => {
    const {board, handleClick, restart, currentPlayer, winner, status} = props;

    return (
        <>
            <div className="board-status">
                {status === GAME_STATUS.FINISHED &&
                <h1>
                    {winner && `Player ${winner} won the game`}
                    {!winner && "It's a tie "}
                </h1>}
                {status !== GAME_STATUS.FINISHED && <h1>Current Player: "{currentPlayer}"</h1>}
            </div>
            <div className="board">
                {board.map((value, index) => (
                    <Square
                        key={index}
                        value={value}
                        index={index}
                        handleClick={handleClick}
                    />
                ))}
            </div>
            <div className="game-controls">
                <button onClick={() => restart(false)}>Restart Game</button>
                <button onClick={() => restart(true)}>New Game</button>
            </div>
        </>
    );
};
export default Board;
