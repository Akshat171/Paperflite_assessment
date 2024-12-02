import { configureStore } from '@reduxjs/toolkit'
import collectionsReducer from '../Slices/collectionsSlice'

export const store = configureStore({
  reducer: {
    collections: collectionsReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
