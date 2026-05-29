import {create} from "zustand";


export const useGameStore = create((set) => (
    {
        history: [Array(9).fill(null)], // history of all boards
        currentMove: 0, 

        setHistory: (nextHistory) => {
            set({history: nextHistory})
        },

        setCurrentMove: (move) => {
            set({currentMove: move})
        },
    }
))