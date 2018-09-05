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
