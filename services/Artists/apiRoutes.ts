const createMaps = <T extends Record<string, string>>(obj: T) => obj;

const API_ROUTES = createMaps({
  topArtists: 'chart.gettopartists',
  getInfo: 'artist.getinfo',
  gettopalbums: 'artist.gettopalbums',
  gettoptracks: 'artist.gettoptracks',
});

export default API_ROUTES;
