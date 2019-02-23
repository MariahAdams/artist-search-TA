export const getArtists = async() => {
  const res = await fetch('http://musicbrainz.org/ws/2/artist?query=nirvana&fmt=json&limit=25');
  return res.json();    
};
