import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    profile: null,
    loggedIn: false,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser(state, action) {
            state.user = action.payload;
            state.loggedIn = Boolean(action.payload);
        },
        removeUser(state, action) {
            state.user = null;
            state.loggedIn = false;
        }
    },
});

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;