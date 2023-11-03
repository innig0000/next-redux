import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    number: 1,
};

const currentPageSlice = createSlice({
    name: 'number',
    initialState,
    reducers: {
        setNumber(state, action) {
            return {
                ...state,
                number: action.payload,
            }
        },
    },
});

export const { setNumber } = currentPageSlice.actions;
export default currentPageSlice.reducer;