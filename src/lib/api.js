const BASE_URL = "https://rickandmortyapi.com/api/character";
const input = document.querySelector(".header-input");
export function fetchCharacters(status) {
  let url;

  if (input.value) {
    url = `${BASE_URL}?name=${input.value}`;
  } else {
    {
      if (status === "alive") {
        url = `${BASE_URL}?status=alive`;
      } else if (status === "dead") {
        url = `${BASE_URL}?status=dead`;
      } else if (status === "unknown") {
        url = `${BASE_URL}?status=unknown`;
      } else if (status === "all") {
        url = BASE_URL;
      }
    }
  }
  return fetch(url).then((res) => res.json());
}