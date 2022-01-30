import { createSlice } from '@reduxjs/toolkit';

export const gameSlice = createSlice({
    name: 'game',
    initialState: {
      userVal: null,
      compVal: -1,
    },
    reducers: {
        setUserVal: (state, action) => {
            state.userVal = action.payload;
        },
        setCompVal: (state) => {
            // https://stackoverflow.com/a/24152886/12302691
            let res = Math.floor(Math.random() * 5);
            for (let i = 1; res === state.userVal; i++) {
                // To avoid draws
                res = Math.floor(Math.random() * 5);
                if (i > 5) {
                    alert("Something went wrong.");
                    break;
                }
            }
            state.compVal = res;
        },
        resetGame: (state) => {
            state.userVal = null;
            state.compVal = -1;
        }
    },
});

export const { setUserVal, setCompVal, resetGame } = gameSlice.actions;

export const selectUserVal = (state) => state.game.userVal;
export const selectCompVal = (state) => state.game.compVal;

export default gameSlice.reducer;
