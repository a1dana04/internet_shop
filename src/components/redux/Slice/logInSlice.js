import { createSlice } from "@reduxjs/toolkit"

const initialState  = {
    user: JSON.parse(localStorage.getItem("login"))||{}
}

export const logInSlice = createSlice({
    name:"LOGIN",
    initialState,
    reducers:{
        addLogin(state,action){
            state.user = action.payload
            localStorage.setItem("login", JSON.stringify(action.payload))

        },
        clearLogOut(state,action){
            state.user = {}
            localStorage.setItem("login", JSON.stringify({}))
        }
    }
});
export const {addLogin,clearLogOut} = logInSlice.actions;
export default logInSlice.reducer;