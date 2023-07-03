import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface AppState {
  bucket: number[]
  theme: string
}

const initialState: AppState = {
  bucket: [],
  theme: 'dark',
}

export const appSlice = createSlice({
  name: 'app-state',
  initialState,
  reducers: {
    changeTheme (state, action: PayloadAction<string>) {
      state.theme = action.payload
    },

    addToBucket (state, action: PayloadAction<number>) {
      state.bucket = [...state.bucket, action.payload]
    },

    removeFromBucket (state, action: PayloadAction<number>) {
      state.bucket = state.bucket.filter(id => id !== action.payload)
    },
  }
})

export default appSlice.reducer
