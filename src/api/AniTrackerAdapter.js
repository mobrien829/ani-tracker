const API_URL = "http://localhost:4000/api/v1";

export default class AniTrackerAdapter {
  static getToken() {
    return localStorage.getItem("token");
  }

  static isLoggedIn() {
    return !!AniTrackerAdapter.getToken();
  }

  //   static getBookmarks() {
  //     const config = {
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: AniTrackerAdapter.getToken()
  //       }
  //     };

  //     return fetch(`${API_URL}/users`, config)
  //       .then(res => {
  //         if (res.ok) {
  //           return res.json();
  //         }
  //         throw new Error("Failed to aceess your page");
  //       })
  //       .catch(err => {
  //         console.warn(`Failed to fetch anime`, err);
  //         return [];
  //       });
  //   }

  //   static postLogin(username, password) {
  //     const config = {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json"
  //       },
  //       body: JSON.stringify({ username, password })
  //     };

  //     return fetch(`${API_URL}/login`, config).then(res => res.json());
  //   }

  //   static postRegistration(username, password) {
  //     const config = {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json"
  //       },
  //       body: JSON.stringify({ username, password })
  //     };

  //     return fetch(`${API_URL}/users`, config).then(res => res.json());
  //   }
}
