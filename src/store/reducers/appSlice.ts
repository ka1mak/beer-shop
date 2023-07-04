import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface AppState {
  bucket: number[]
}

const initialState: AppState = {
  bucket: [],
}

export const appSlice = createSlice({
  name: 'app-state',
  initialState,
  reducers: {
    addToBucket(state, action: PayloadAction<number>) {
      state.bucket = [...state.bucket, action.payload]
    },

    removeFromBucket(state, action: PayloadAction<number>) {
      state.bucket = state.bucket.filter(id => id !== action.payload)
    },
  }
})

export default appSlice.reducer
