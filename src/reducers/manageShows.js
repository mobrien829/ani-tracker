const initialState = {
  shows: [],
  selectedShow: "",
  selectedGenre: ""
};
function manageShows(state = initialState, action) {
  switch (action.type) {
    case "ADD_SHOWS":
      return {
        ...state,
        shows: [...action.payload.data.Page.media]
      };
    case "SELECT_SHOW":
      let foundShow = state.shows.find(show => show.id === action.payload);
      return {
        ...state,
        selectedShow: { ...foundShow }
      };
    case "LOAD_ONE_SHOW":
      return {
        ...state,
        selectedShow: { ...action.payload.data.Media }
      };
    case "SELECT_GENRE":
      return {
        ...state,
        selectedGenre: {}
      };
    default:
      return state;
  }
}

export default manageShows;
