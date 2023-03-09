import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
  filter: '',
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  reducers: {
    addContact(state, action) {
      console.log(action);
      state.contacts.push(action.payload);
    },
    deleteContact(state, { payload }) {
      return {
        ...state,
        contacts: state.contacts.filter(({ id }) => id !== payload),
      };
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
