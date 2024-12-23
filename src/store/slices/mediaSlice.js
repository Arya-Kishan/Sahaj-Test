import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mediaData: {
    pressCoverage: [],
    podcast: [],
    videoChannel: [],
    blogs: [],
    customersInMedia: [],
  },
  combinedData: {}, 
  filteredData: [],
  searchQuery: "",
  isSearching: false,
  activeTab: "blogs",
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


    setActiveTab: (state, action) => {
      state.activeTab = action.payload;
    },

   
    setSearchQuery: (state, action) => {
      const query = action.payload.toLowerCase();
      state.searchQuery = query;

      if (query) {
        state.isSearching = true;

        const titleFieldMapping = {
          pressCoverage: "Title",
          podcast: "PodcastTitle",
          videoChannel: "VideoTitle",
          blogs: "title",
          customersInMedia: "MediaTitle",
        };

        const combinedResults = [];

       
        for (const [key, value] of Object.entries(state.mediaData)) {
          if (value && Array.isArray(value)) {
            const titleField = titleFieldMapping[key];
            const filteredItems = value.filter((item) =>
              item?.[titleField]?.toLowerCase().includes(query)
            );

      
            state.mediaData[key] = filteredItems.length > 0 ? filteredItems : [];

          
            if (filteredItems.length > 0) {
              combinedResults.push(...filteredItems);
            }
          }
        }

       
        state.filteredData = combinedResults;
      } else {

        state.isSearching = false;
        state.filteredData = [];
      }
    },

    clearSearch: (state) => {
      state.isSearching = false;
      state.filteredData = []; 
      state.searchQuery = ""; 
      state.mediaData = { ...state.combinedData }; 
    },

   
    setFilteredData: (state, action) => {
      state.filteredData = action.payload;
    },

   
    updateSingleKeyFilteredData: (state, action) => {
      const { key, filteredData } = action.payload;
      state.mediaData[key] = filteredData;
    },

   
    setIsSearching: (state, action) => {
      state.isSearching = action.payload;
    },
  },
});

export const {
  setMediaData,
  setActiveTab,
  setSearchQuery,
  clearSearch,
  setFilteredData,
  updateSingleKeyFilteredData,
  setIsSearching,
} = mediaSlice.actions;

export default mediaSlice.reducer;
