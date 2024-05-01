import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    toggle: false,
    user: {} || null,
    side: false
}

const GlobalState = createSlice({
    name: "state",
    initialState,
    reducers: {
        toggled: (state: any) => {
            state.toggle = true
        },
        changedToggle: (state: any) => {
            state.toggle = false
        },
        mainUser: (state: any, { payload }) => {
            state.user = payload
        },
        logOut: (state: any) => {
            state.user = null
        },
        sided: (state: any) => {
            state.side = true
        },
        changedSide: (state: any) => {
            state.side = false
        }
    }
});

export const { changedToggle, toggled, logOut, mainUser, changedSide, sided } = GlobalState.actions

export default GlobalState.reducer