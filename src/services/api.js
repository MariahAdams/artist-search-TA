const requestApi = () => {
  return fetch('https://swapi.co/api/people/1')
    .then(res => res.json())
    .then(json => ({
      results: json.name
    }));
};

export const getCharacters = page => {
  return requestApi('character', page);
};

export const getLocations = page => {
  return requestApi('location', page);
};

export const getEpisodes = page => {
  return requestApi('episode', page);
};