
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
          if (value) {
            const titleField = titleFieldMapping[key] || "title";
            const filteredItems = value.filter((item) =>
              item?.[titleField]?.toLowerCase().includes(query)
            );

           
            state.mediaData[key] = filteredItems.length > 0 ? filteredItems : null;

           
            if (filteredItems.length > 0) {
              combinedResults.push(...filteredItems);
            }
          }
        }

        state.filteredData = combinedResults; 
      } else {
       
        state.isSearching = false;
        state.filteredData = [];
        state.mediaData = { ...state.combinedData };
      }
    },
    clearSearch: (state) => {
      state.searchQuery = "";
      state.isSearching = false;
      state.filteredData = [];
      state.mediaData = { ...state.combinedData };
    },
    setActiveTab: (state, action) => {
      state.activeTab = action.payload;
    },
  },
});

export const { setMediaData, setSearchQuery, clearSearch, setActiveTab } = mediaSlice.actions;
export default mediaSlice.reducer;
