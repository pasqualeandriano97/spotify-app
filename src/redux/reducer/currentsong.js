import { CURRENT_SONG } from "../actions";

const initialState = {
  currentSong: {},
};

const CurrentSongReducer = (state = initialState, action) => {
  switch (action.type) {
    case CURRENT_SONG:
      return {
        ...state,
        currentSong: action.payload,
      };
    default:
      return state;
  }
};

export default CurrentSongReducer;
