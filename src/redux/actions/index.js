export const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES";
export const REMOVE_FROM_FAVOURITES = "REMOVE_FROM_FAVOURITES";
export const CURRENT_SONG = "CURRENT_SONG";

export const addToFavourites = (music) => {
  return { type: ADD_TO_FAVOURITES, payload: music };
};

export const removeFromFavourites = (music) => {
  return { type: REMOVE_FROM_FAVOURITES, payload: music };
};

export const currentSong = (music) => {
  return { type: CURRENT_SONG, payload: music };
};
