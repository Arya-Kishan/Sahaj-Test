
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mediaData: {
    pressCoverage: null,
    podcast: null,
    videoChannel: null,
    blogs: null,
    customersInMedia: null,
  },
  combinedData: {},
  filteredData: {},
  searchQuery: "",
  isSearching: false,
  activeTab: "pressCoverage",
};

const mediaSlice = createSlice({
  name: "media",
  initialState,
  reducers: {
    setMediaData: (state, action) => {
      const { key, data } = action.payload;
      state.mediaData[key] = data;
      state.combinedData = { ...state.mediaData };
    },
    setSearchQuery: (state, action) => {
      const query = action.payload.toLowerCase();
      state.searchQuery = query;

      if (query) {
        state.isSearching = true;

        const filteredData = {};

        for (const [key, value] of Object.entries(state.mediaData)) {
          if (value) {
            const filteredItems = value.filter((item) =>
              item.title.toLowerCase().includes(query)
            );
            if (filteredItems.length > 0) {
              filteredData[key] = filteredItems;
            }
          }
        }

        state.filteredData = filteredData;
      } else {
        state.isSearching = false;
        state.filteredData = {};
      }
    },
    clearSearch: (state) => {
      state.searchQuery = "";
      state.isSearching = false;
      state.filteredData = {};
    },
    setActiveTab: (state, action) => {
      state.activeTab = action.payload;
    },
  },
});

export const { setMediaData, setSearchQuery, clearSearch, setActiveTab } = mediaSlice.actions;
export default mediaSlice.reducer;
