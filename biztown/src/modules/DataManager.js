// TODO: Set up dev and production URLs

// NOTE: ensure remoteURL is consistent with local back end url
const remoteURL = "https://ja-biztown-server.azurewebsites.net/"; // || "40.70.147.13"

const DataManager = {
  post(tab, obj) {
    return fetch(`${remoteURL}/${tab}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(obj),
    });
  },
  getAll(tab) {
    return fetch(`${remoteURL}/${tab}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }).then((res) => res.json());
  },
};

export default DataManager;
