import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mediaData: {
        pressCoverage: [],
        podcast: [],
        videoChannel: [],
        blogs: [],
        customersInMedia: [],
    },
    combinedData: [],
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
            state.combinedData = Object.values(state.mediaData).flat();
        },


        setCombinedData: (state, action) => {
            state.combinedData = action.payload;
        },


        setActiveTab: (state, action) => {
            state.activeTab = action.payload;
        }, 

        setSearchQuery: (state, action) => {
            const query = action.payload.toLowerCase();
            state.searchQuery = query;
        
            if (query) {
                state.isSearching = true;
            }
             else {

                state.isSearching = false;
                //state.filteredData = [];
                state.combinedData = Object.values(state.mediaData).flat();
            }
        },
        
        clearSearch: (state) => {
            state.isSearching = false;
            state.filteredData = [];
            state.searchQuery = "";
            state.combinedData = Object.values(state.mediaData).flat();
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
    setCombinedData,
    updateSingleKeyFilteredData,
    setIsSearching,
} = mediaSlice.actions;

export default mediaSlice.reducer;
