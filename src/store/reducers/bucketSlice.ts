import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IGood } from 'types/IGood'

interface BucketState {
  ids: number[]
  goods: IGood[]
  count: number
}

const initialState: BucketState = {
  ids: [],
  goods: [],
  count: 0,
}

export const bucketSlice = createSlice({
  name: 'bucket',
  initialState,
  reducers: {
    getGoods(state, action: PayloadAction<IGood[]>) {
      state.goods = action.payload
    },
    addToBucket(state, action: PayloadAction<number>) {
      state.ids = [...state.ids, action.payload]
      state.count = state.goods.length
    },
    removeFromBucket(state, action: PayloadAction<number>) {
      state.ids = state.ids.filter(id => id !== action.payload)
      state.count = state.goods.length
    },
  }
})

export default bucketSlice.reducer
