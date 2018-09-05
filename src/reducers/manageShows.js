const initialState = {
  shows: []
};
function manageShows(state = initialState, action) {
  switch (action.type) {
    case "ADD_SHOW":
      return {
        ...state,
        shows: [...state.shows, action.show]
      };
    default:
      return state;
  }
}

export default manageShows;
