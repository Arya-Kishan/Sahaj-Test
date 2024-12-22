import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mediaData: {
    pressCoverageData: null,
    podcastData: null,
    videoChannelData: null,
    blogsData: null,
    customersInMediaData: null,
  },
  combinedData: {},
  filteredData: {}, 
  searchQuery: "",  
  isSearching: false, 
  activeTab:"All"
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
            filteredData[key] = value.filter((item) =>
              item.title.toLowerCase().includes(query)
            );
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
  },
});

export const { setMediaData, setSearchQuery, clearSearch } = mediaSlice.actions;

export default mediaSlice.reducer;
