export default function manageShows(
  state = {
    shows: []
  },
  action
) {
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
