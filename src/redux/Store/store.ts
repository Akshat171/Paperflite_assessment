import { configureStore } from '@reduxjs/toolkit'
import collectionsReducer from '../Slices/collectionsSlice'

// Create the store
export const store = configureStore({
    reducer: {
      // Add your reducers here
    collections: collectionsReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
