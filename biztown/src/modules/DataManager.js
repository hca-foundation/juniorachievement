// TODO: Set up dev and production URLs

// NOTE: ensure remoteURL is consistent with local back end url
const remoteURL = "http://127.0.0.1:8000"; // || "http://localhost:8000"

export default {
  post(tab, obj) {
    return fetch(`${remoteURL}/${tab}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(obj)
    })
  },
  get() {
    return fetch(`${remoteURL}/schools`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
  }
}