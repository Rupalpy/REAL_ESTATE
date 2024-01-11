import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser: null,
    error: null,
    loading: false,
};

const userSlice= createSlice({
    name: 'user',
    initialState,
    reducers:{
        signInStart: (state) => {
            state.loading = true;
        },
        signInSuccess: (state,action) => {
            state.currentUser = action.payload;
            state.loading= false;
            state.error= null;

        },
        signInFailure: (state,action) => {
            state.error = action.payload;
            state.loading=false;
        },
        //to track the loading effect
        updateUserStart: (state) => {
            state.loading = true;
        },
        //response from backend
        updateUserSuccess: (state, action) => {
            state.currentUser = action.payload;
            state.loading = false;
            state.error = null;
        },
        updateUserFailure: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },
    },
});

export const {
    signInStart,
    signInSuccess,
    signInFailure,
    updateUserFailure,
    updateUserSuccess,
    updateUserStart,
  } = userSlice.actions;
  
export default userSlice.reducer;