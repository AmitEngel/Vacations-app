import { Action, createSlice } from "@reduxjs/toolkit";
import { User } from '../interfaces/user.interface';

const initialState = (): User => ({
    id: 0,
    first_name: "",
    last_name: "",
    username: "",
    password: "",
    is_admin: false,
    token: JSON.parse(localStorage.getItem('jwt')!) || null 
})



export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logIn: (state, action) => {
            return {...state ,...action.payload}
        },
        logOut: () => {
            return initialState()
        }
    }
})

export const authMiddleware =
    (_store: any) => (next: (arg: any) => any) => (action: Action<unknown>) => {
        if (authSlice.actions.logIn.match(action) && action.payload.token) {
            localStorage.setItem(
                "jwt",
                JSON.stringify(action.payload.token)
            );
        } else if (authSlice.actions.logOut.match(action)) {
            localStorage.removeItem("jwt");
        }
        return next(action);
    };

export const selectUser = (state: {auth:User}) => state.auth; 

export const { logIn, logOut } = authSlice.actions
export default authSlice.reducer;