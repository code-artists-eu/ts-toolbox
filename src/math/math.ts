export function mapValue(value: number, valMin:number, valMax:number, outMin: number, outMax: number) {
  return outMin + ((value - valMin) * (outMax - outMin)) / (valMax - valMin);
}

export function degToRad(degrees: number) {
  return degrees * (Math.PI / 180);
}
