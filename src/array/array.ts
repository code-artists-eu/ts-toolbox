export const arrayDiff = (oldArray: string[], newArray: string[]) => {
  return {
    added: newArray.filter(ni => !oldArray?.includes(ni)),
    same: newArray.filter(ni => oldArray.includes(ni)),
    removed: oldArray.filter(oi => !newArray?.includes(oi))
  }
}

export const arrayMove = (array: any[], index: number, move: -1 | 1) => {
  const arrayCopy = JSON.parse(JSON.stringify(array))
  const newPosition = index + move

  if(newPosition > array.length || newPosition < 0) return array

  arrayCopy[newPosition] = arrayCopy[index]
  arrayCopy[index] = array[newPosition]

  return arrayCopy
}

export const getKey = (data: any, key: string): any => {
  const dotIndex = key.indexOf(".")

  if (dotIndex >= 0) {
    const preKey = key.substr(0, dotIndex)
    const newKey = key.substr(dotIndex + 1)

    if (!data[preKey]) return null

    return getKey(data[preKey], newKey)
  }

  return data[key]
}
