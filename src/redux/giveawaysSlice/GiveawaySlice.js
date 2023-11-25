import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getGiveaways = createAsyncThunk(
  "GiveawaySlice/getGiveaways",
  async () => {
    const { data } = await axios.get(
      "https://mmo-games.p.rapidapi.com/giveaways",
      {
        headers: {
          "X-RapidAPI-Key":
            "1aaa7045cfmsh502f3009397a9cbp179a49jsnaeface2db3c8",
          "X-RapidAPI-Host": "mmo-games.p.rapidapi.com",
        },
      }
    );

    return data;
  }
);

const initialState = {
  giveaways: [],
  loading: false,
  errors: null,
};

const GiveawaySlice = createSlice({
  name: "GiveawaySlice",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getGiveaways.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getGiveaways.fulfilled, (state, action) => {
      state.loading = false;
      state.giveaways = action.payload;
    });
    builder.addCase(getGiveaways.rejected, (state, action) => {
      state.loading = false;
      state.errors = action.payload;
    });
  },
});

export default GiveawaySlice.reducer;
