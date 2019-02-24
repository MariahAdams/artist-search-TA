export const getArtists = async(query) => {
  const res = await fetch(`http://musicbrainz.org/ws/2/artist?query=${query}&fmt=json&limit=25`);
  return res.json();    
};

export const getWorks = async(artistId) => {
  const res = await fetch(`http://musicbrainz.org/ws/2/artist/${artistId}?fmt=json&inc=works`);
  return res.json();
};

export const getLyrics = async(artist, song) => {
  //TODO: format artist and song with regex

  const res = await fetch(`https://api.lyrics.ovh/v1/${artist}/${song}`);
  return res.json();
};