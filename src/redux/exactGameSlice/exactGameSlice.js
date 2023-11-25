import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";

export const fetchExactGame = createAsyncThunk(
  "getExactGameSlice/fetchExactGame",
  async (getId) => {
    const { data } = await axios(
      "https://free-to-play-games-database.p.rapidapi.com/api/game",
      {
        method: "GET",
        params: { id: getId },
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
  game: [],
  loading: false,
  error: null,
};

export const getExactGameSlice = createSlice({
  name: "getExactGameSlice",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchExactGame.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchExactGame.fulfilled, (state, action) => {
      state.loading = false;
      state.game = action.payload;
    });
    builder.addCase(fetchExactGame.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default getExactGameSlice.reducer;
