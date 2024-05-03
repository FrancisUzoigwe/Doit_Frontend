import { createSlice } from '@reduxjs/toolkit'


interface GlobalState {
    toggle: boolean;
    user: any | null,
    side: boolean,
    update: boolean,
    selectedBox: { topic: string, content: string, id: string } | null
}

const initialState: GlobalState = {
    toggle: false,
    user: {} || null,
    side: false,
    update: false,
    selectedBox: null
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
        },
        updated: (state: any) => {
            state.update = true
        },
        changeUpdate: (state: any) => {
            state.update = false
        },
        selectBox: (state, action) => {
            state.selectedBox = action.payload
        },
        clearSelectedBox: (state: any) => {
            state.selectedBox = null
        }
    }
});

export const { changedToggle, toggled, logOut, mainUser, changedSide, sided, updated, changeUpdate, clearSelectedBox, selectBox } = GlobalState.actions

export default GlobalState.reducer