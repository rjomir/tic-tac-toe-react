import useTickTackToe from "./hooks/useTicTacToe";
import Board from "./pages/Board";
import Start from "./pages/Start";
import {GAME_STATUS} from "./util";
import "./App.css"

const App = () => {
    const game = useTickTackToe();
    return (
        <div className="App">
            {game.status === GAME_STATUS.CREATED && <Start handleStart={game.handleStart}/>}
            {game.status !== GAME_STATUS.CREATED && (
                <Board board={game.board} handleClick={game.handleClick} status={game.status}
                       winner={game.winner}
                       currentPlayer={game.currentPlayer}
                       restart={game.handleRestart}/>
            )}
        </div>
    );
};
export default App;
