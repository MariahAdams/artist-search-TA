export const getArtists = async(query) => {
  const res = await fetch(`http://musicbrainz.org/ws/2/artist?query=${query}&fmt=json&limit=25`);
  return res.json();    
};
