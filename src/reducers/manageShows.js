const initialState = {
  shows: []
};
function manageShows(state = initialState, action) {
  console.log("%c reducer", "color: teal", state, action);
  switch (action.type) {
    case "ADD_SHOWS":
      return {
        ...state,
        shows: [...state.shows, ...action.payload.data.Page.media]
      };
    default:
      return state;
  }
}

export default manageShows;
