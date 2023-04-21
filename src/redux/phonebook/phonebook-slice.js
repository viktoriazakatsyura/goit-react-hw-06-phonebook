import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";


const phonebookSlice = createSlice({
  name: "phonebook",
  initialState: { items: [], filter: "" },
  reducers: {
    addContact: (state, { payload }) => {
      const newContact = { ...payload, id: uuidv4() };
      state.items.push(newContact);
    },
    deleteContact: (state, { payload }) => {
      state.items = state.items.filter(({ id }) => id !== payload);
    },
    changeFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },
});

export const { addContact, deleteContact, changeFilter } = phonebookSlice.actions;

export default phonebookSlice.reducer;