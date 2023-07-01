import { combineReducers, configureStore } from '@reduxjs/toolkit'
import bucketSlice from './reducers/bucketSlice'
import appSlice from './reducers/appSlice'
import marketSlice from './reducers/marketSlice'

const rootReducer = combineReducers({
  bucketSlice,
  appSlice,
  marketSlice,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
