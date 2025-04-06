export function latLonToMapTile(lat: number, lon: number, zoom: number) {
  const x = Math.floor((lon + 180) / 360 * Math.pow(2, zoom));
  const y = Math.floor((1 - Math.log(Math.tan(lat * Math.PI / 180) + 1 / Math.cos(lat * Math.PI / 180)) / Math.PI) / 2 * Math.pow(2, zoom));
  return {x: x, y: y, z: zoom};
}


export function getTileWidthInMeters(zoom: number, lat: number) {
  const earthCircumference = 40075016.686; // in meters
  const numTiles = 2 ** zoom; // number of tiles at given zoom level
  const metersPerTile = earthCircumference / numTiles; // tile width at the equator

  // Adjust for latitude using the Mercator projection
  const latRad = lat * (Math.PI / 180); // Convert latitude to radians
  const scaleFactor = Math.cos(latRad); // Mercator scale correction

  return metersPerTile * scaleFactor;
}
