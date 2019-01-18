export function logInActionId(data) {
  return {
    type: "LOG_IN",
    payload: data
  };
}

export function logOutAction(data) {
  return {
    type: "LOG_OUT",
    payload: data
  };
}
