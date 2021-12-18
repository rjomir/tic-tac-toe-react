import {useEffect, useState} from "react";
import {GAME_STATUS, winningPositions} from "../util";
import {ReturnValue} from "../util/types";

const useTicTacToe = (): ReturnValue => {
    const [board, setBoard] = useState(new Array(9).fill(""));
    const [turn, setTurn] = useState("X");
    const [winner, setWinner] = useState<string | null>(null);
    const [status, setStatus] = useState(GAME_STATUS.CREATED);
    const [players, setPlayers] = useState(["", ""]);
    const [currentPlayer, setCurrentPlayer] = useState("");

    useEffect(() => {
        if (status !== GAME_STATUS.STARTED) return;

        let winningPositionsIndex = 0;
        let winner: string | null = null;

        while (winningPositionsIndex < winningPositions.length && !winner) {
            const boardPositionsToCheck = winningPositions[winningPositionsIndex];

            const boardValuesToCkeck = boardPositionsToCheck.map(
                (index) => {
                    return board[index]
                }
            );

            const checkingValue = boardValuesToCkeck[0];

            const isFinished = boardValuesToCkeck.every(
                (value) => value === checkingValue && checkingValue
            );

            winner = !isFinished ? null : checkingValue;
            winningPositionsIndex++;
        }

        if (winner) {
            setWinner(winner === "X" ? players[0] : players[1]);
            setStatus(GAME_STATUS.FINISHED);
            return;
        }

        setStatus(board.filter((value) => !value).length ? GAME_STATUS.STARTED : GAME_STATUS.FINISHED);
    }, [board, players, status]);

    const handleClick = (index: number): void => {
        if (index < 0 || index > 9 || board[index] || winner) return;
        const newBoard = [...board];
        newBoard.splice(index, 1, turn);
        setBoard(newBoard);
        const newTurn = turn === "X" ? "O" : "X";
        setTurn(newTurn);
        const currentPlayer = turn === "X" ? players[1] : players[0];
        setCurrentPlayer(currentPlayer)
    };

    const handleStart = (players: string[]) => {
        setPlayers(players);
        setTurn("X");
        setCurrentPlayer(players[0]);
        setStatus(GAME_STATUS.STARTED);
    };

    const handleRestart = (newPlayers: boolean = false) => {
        setBoard(Array(9).fill(""));
        setWinner("");
        setStatus(newPlayers ? GAME_STATUS.CREATED : GAME_STATUS.STARTED);
    };

    return {board, status, winner, handleClick, handleRestart, handleStart, currentPlayer};
};

export default useTicTacToe
