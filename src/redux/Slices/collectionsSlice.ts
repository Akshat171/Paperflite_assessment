import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Collection } from '@/types/collection'
import { collections as initialCollections } from '@/data/collections'

const collectionsSlice = createSlice({
  name: 'collections',
  initialState: initialCollections,
  reducers: {
    addCollection: (state, action: PayloadAction<Collection>) => {
      state.push(action.payload)
    },
    updateCollection: (state, action: PayloadAction<Collection>) => {
      const index = state.findIndex(c => c.id === action.payload.id)
      if (index !== -1) {
        state[index] = action.payload
      }
    },
    deleteCollection: (state, action: PayloadAction<string>) => {
      return state.filter(c => c.id !== action.payload)
    }
  }
})

export const { addCollection, updateCollection, deleteCollection } = collectionsSlice.actions
export default collectionsSlice.reducer
