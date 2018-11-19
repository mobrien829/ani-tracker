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

export function clearSelectedShowAction(data) {
  return {
    type: "CLEAR_SHOW",
    payload: data
  };
}

export function selectGenreAction(data) {
  return {
    type: "SELECT_GENRE",
    payload: data
  };
}

export function changeShowsByGenreAction(data) {
  return {
    type: "CHANGE_GENRE",
    payload: data
  };
}

export function searchApiAction(data) {
  return {
    type: "SEARCH_API",
    payload: data
  };
}
