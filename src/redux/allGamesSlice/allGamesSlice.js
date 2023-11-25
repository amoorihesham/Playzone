import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";

export const fetchGames = createAsyncThunk(
  "getGamesSlice/fetchGames",
  async () => {
    const { data } = await axios(
      "https://free-to-play-games-database.p.rapidapi.com/api/games",
      {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "1aaa7045cfmsh502f3009397a9cbp179a49jsnaeface2db3c8",
          "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
        },
      }
    );
    // console.log(data);
    return data;
  }
);

const initialState = {
  games: [],
  loading: false,
  error: null,
};

export const getGamesSlice = createSlice({
  name: "getGamesSlice",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchGames.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchGames.fulfilled, (state, action) => {
      state.loading = false;
      state.games = action.payload;
    });
    builder.addCase(fetchGames.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default getGamesSlice.reducer;
