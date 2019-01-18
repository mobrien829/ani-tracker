const initialState = {
  shows: [],
  selectedShow: "",
  selectedGenre: "",
  userId: null,
  username: ""
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
    case "CLEAR_SHOW":
      return {
        ...state,
        selectedShow: ""
      };
    case "LOAD_ONE_SHOW":
      return {
        ...state,
        selectedShow: { ...action.payload.data.Media }
      };
    case "SELECT_GENRE":
      console.log(action);
      return {
        ...state,
        selectedGenre: action.payload
      };
    case "CHANGE_GENRE":
      return {
        ...state,
        shows: [...action.payload.data.Page.media]
      };
    case "SEARCH_API":
      return {
        ...state,
        shows: [...action.payload.data.Page.media],
        selectedGenre: ""
      };
    case "LOG_IN":
      return {
        ...state,
        userId: action.payload.id,
        username: action.payload.username
      };
    // case "LOG_IN":
    //   return {
    //     ...state,
    //     userId: action.payload
    //   };
    default:
      return state;
  }
}

export default manageShows;
