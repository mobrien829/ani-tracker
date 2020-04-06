const saveShowClicker = (params, userId) => {
  let title;
  if (!params.title.english) {
    title = params.title.romaji ? params.title.romaji : params.title.native;
  } else {
    title = params.title.english;
  }
  console.log(params);
  fetch("http://localhost:4000/api/v1/shows", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token")
    },
    body: JSON.stringify({
      title,
      malId: params.id,
      description: params.description,
      coverImgString: params.coverImage.large || params.coverImage.small,
      bannerImgString: params.bannerImage,
      genres: params.genres
    })
  })
    .then(res => res.json())
    .then(show => saveUserShow(userId, show.id));
};

const saveUserShow = (userId, showId) => {
  let settings = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token")
    },
    body: JSON.stringify({
      user_id: userId,
      show_id: showId
    })
  };
  fetch("http://localhost:4000/api/v1/user_shows", settings).then(res =>
    res.json().then(data => console.log(data))
  );
};

module.exports = { saveShowClicker };
