import { configureStore, combineReducers } from "@reduxjs/toolkit";
import favouritesReducer from "../reducer/favourite";
import currentSongReducer from "../reducer/currentsong";

const globalReducer = combineReducers({
  favourites: favouritesReducer,
  currentSong: currentSongReducer,
});

const store = configureStore({
  reducer: globalReducer,
});

export default store;
