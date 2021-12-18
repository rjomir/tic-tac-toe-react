import {useState, useMemo, FormEvent} from "react";

interface Props {
    handleStart(players: string[]): void;
}

const Start = (props: Props) => {
    const {handleStart} = props;
    const [players, setPlayers] = useState(["", ""]);

    const handleInput = (e: FormEvent<HTMLInputElement>, index: number) => {
        const newPlayers = [...players];
        newPlayers.splice(index, 1, e.currentTarget.value);
        setPlayers(newPlayers);
    };

    const canStart = useMemo(
        () => (players[0] !== players[1]) && players.every((player) => player && player.length > 0),
        [players]
    );

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!canStart) return;
        handleStart(players);
    };

    return (
        <div className="start-page">
            <h1>Start New Game</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="player1">Chose Player 1 name:</label>
                    <input
                        type="text"
                        value={players[0]}
                        onInput={(e) => handleInput(e, 0)}
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="player2">Chose Player 2 name:</label>
                    <input
                        type="text"
                        value={players[1]}
                        onInput={(e) => handleInput(e, 1)}
                    />
                </div>
                <div className="form-control">
                    <button type="submit" className="start-game-button" disabled={!canStart}>
                        Start New Game
                    </button>
                </div>
            </form>
        </div>
    );
};
export default Start;
