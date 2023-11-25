import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getGamesByCategory = createAsyncThunk(
  "GamesByCategorySlice/getGamesByCategory",
  async (cate) => {
    const { data } = await axios.get(
      "https://free-to-play-games-database.p.rapidapi.com/api/games",
      {
        params: { category: cate },
        headers: {
          "X-RapidAPI-Key":
            "1aaa7045cfmsh502f3009397a9cbp179a49jsnaeface2db3c8",
          "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
        },
      }
    );

    return data;
  }
);

const initialState = {
  games: [],
  loading: false,
  error: null,
};

const GamesByCategorySlice = createSlice({
  name: "GamesByCategorySlice",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getGamesByCategory.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getGamesByCategory.fulfilled, (state, action) => {
      state.loading = false;
      state.games = action.payload;
    });
    builder.addCase(getGamesByCategory.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default GamesByCategorySlice.reducer;
