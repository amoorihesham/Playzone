import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getNews = createAsyncThunk("getNewsSlice/getNews", async () => {
  const { data } = await axios.get(
    "https://mmo-games.p.rapidapi.com/latestnews",
    {
      headers: {
        "X-RapidAPI-Key": "1aaa7045cfmsh502f3009397a9cbp179a49jsnaeface2db3c8",
        "X-RapidAPI-Host": "mmo-games.p.rapidapi.com",
      },
    }
  );

  return data;
});

const initialState = {
  news: [],
  loading: false,
  errors: null,
};

const NewsSlice = createSlice({
  name: "getNewsSlice",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getNews.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getNews.fulfilled, (state, action) => {
      state.loading = false;
      state.news = action.payload;
    });
    builder.addCase(getNews.rejected, (state, action) => {
      state.loading = false;
      state.errors = action.payload;
    });
  },
});

export default NewsSlice.reducer;
