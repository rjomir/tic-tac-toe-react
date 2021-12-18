import {GAME_STATUS} from "./index";

export interface ReturnValue {
    board: string[];
    status: GAME_STATUS;
    winner: string | null;
    handleClick: (index: number) => void;
    handleRestart: (newPlayers: boolean) => void;
    handleStart: (players: string[]) => void;
    currentPlayer: string
}
