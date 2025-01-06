import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isBookCallModalOpen: false,
  },
  reducers: {
    openBookCallModal: (state) => {
      state.isBookCallModalOpen = true;
    },
    closeBookCallModal: (state) => {
      state.isBookCallModalOpen = false;
    },
    toggleBookCallModal: (state) => {
      state.isBookCallModalOpen = !state.isBookCallModalOpen;
    },
  },
});

export const { openBookCallModal, closeBookCallModal, toggleBookCallModal } = modalSlice.actions;
export default modalSlice.reducer;
