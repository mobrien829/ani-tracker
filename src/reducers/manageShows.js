const initialState = {
  shows: [],
  selectedShow: null
};
function manageShows(state = initialState, action) {
  console.log("%c reducer", "color: teal", state, action);
  switch (action.type) {
    case "ADD_SHOWS":
      return {
        ...state,
        shows: [...state.shows, ...action.payload.data.Page.media]
      };
      break;
    case "SELECT_SHOW":
      return {
        ...state
        // selectedShow: state.shows.find(action.payload)
      };
      break;
    default:
      return state;
  }
}

export default manageShows;
