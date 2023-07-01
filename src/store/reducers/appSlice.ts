import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface AppState {
  theme: string
}

const initialState: AppState = {
  theme: 'dark'
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    changeTheme(state, action: PayloadAction<string>) {
      state.theme = action.payload
    },
  }
})

export default appSlice.reducer
