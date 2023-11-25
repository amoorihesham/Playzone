import { configureStore } from "@reduxjs/toolkit";
import getGamesSlice from "./allGamesSlice/allGamesSlice";
import getExactGameSlice from "./exactGameSlice/exactGameSlice";
import GamesByCategoriesSlice from "./gamesByCategory/GamesByCategory";
import NewsSlice from "./newsSlice/NewsSlice";
import GiveawaySlice from "./giveawaysSlice/GiveawaySlice";
export const store = configureStore({
  reducer: {
    AllGames: getGamesSlice,
    ExactGame: getExactGameSlice,
    GamesByCategory: GamesByCategoriesSlice,
    GetNews: NewsSlice,
    Giveaways: GiveawaySlice,
  },
});
