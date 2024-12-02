import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Collection } from "@/types/collection";
import { collections as initialCollections } from "@/data/collections";

// Define the initial state
const collectionsSlice = createSlice({
  name: "collections",
  initialState: initialCollections,
    reducers: {
      //add the collection
    addCollection: (state, action: PayloadAction<Collection>) => {
      state.push(action.payload);
      },
      //update the collection
    updateCollection: (state, action: PayloadAction<Collection>) => {
      const index = state.findIndex((c) => c.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
        },
    //delete the collection
    deleteCollection: (state, action: PayloadAction<string>) => {
      return state.filter((c) => c.id !== action.payload);
    },
  },
});

export const { addCollection, updateCollection, deleteCollection } =
  collectionsSlice.actions;
export default collectionsSlice.reducer;
