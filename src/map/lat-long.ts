interface LatLong {
  lat: number
  lon: number
}

export function calculateDistance(point1: LatLong, point2: LatLong) {
  // Earth's radius in kilometers
  const earthRadius = 6371;

  // Convert degrees to radians
  const toRadian = (degree: number) => degree * Math.PI / 180;

  // Convert latitude and longitude from degrees to radians
  const phi1 = toRadian(point1.lat);
  const phi2 = toRadian(point2.lat);
  const deltaPhi = toRadian(point2.lat - point1.lat);
  const deltaLambda = toRadian(point2.lon - point1.lon);

  // Haversine formula
  const a = Math.sin(deltaPhi / 2) * Math.sin(deltaPhi / 2) +
    Math.cos(phi1) * Math.cos(phi2) *
    Math.sin(deltaLambda / 2) * Math.sin(deltaLambda / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  // Calculate distance in kilometers
  let distance = earthRadius * c;

  return distance *= 1000; // Convert to meters;
}
