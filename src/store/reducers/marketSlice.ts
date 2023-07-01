import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IGood } from 'types/IGood'

interface MarketState {
  goods: IGood[]
}

const initialState: MarketState = {
  goods: []
}

export const marketSlice = createSlice({
  name: 'market',
  initialState,
  reducers: {
    getGoods(state, action: PayloadAction<IGood[]>) {
      state.goods = action.payload
    },
  }
})

export default marketSlice.reducer
