export function addShowsAction(data) {
  return {
    type: "ADD_SHOWS",
    payload: data
  };
}

export function selectShowAction(data) {
  return {
    type: "SELECT_SHOW",
    payload: data
  };
}

export function loadOneShowAction(data) {
  return {
    type: "LOAD_ONE_SHOW",
    payload: data
  };
}

export function selectGenreAction(data) {
  return {
    type: "SELECT_GENRE",
    payload: data
  };
}
