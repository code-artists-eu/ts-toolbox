/**
 * @fileoverview Array utility functions
 * @module Array
 */

/**
 * Compares two string arrays and returns the differences between them
 * @param oldArray - The original array to compare against
 * @param newArray - The new array to compare
 * @returns An object containing arrays of added, same, and removed items
 * @example
 * ```typescript
 * import utils from 'your-package';
 * const old = ['apple', 'banana', 'cherry'];
 * const new = ['banana', 'cherry', 'date'];
 * const diff = utils.array.arrayDiff(old, new);
 * console.log(diff);
 * // {
 * //   added: ['date'],
 * //   same: ['banana', 'cherry'],
 * //   removed: ['apple']
 * // }
 * ```
 * @group Array
 */
export const arrayDiff = (oldArray: string[], newArray: string[]) => {
  return {
    added: newArray.filter(ni => !oldArray?.includes(ni)),
    same: newArray.filter(ni => oldArray.includes(ni)),
    removed: oldArray.filter(oi => !newArray?.includes(oi))
  }
}

/**
 * Moves an element in an array by one position up or down
 * @param array - The array to modify
 * @param index - The index of the element to move
 * @param move - Direction to move: -1 for up, 1 for down
 * @returns A new array with the element moved, or the original array if move is invalid
 * @example
 * ```typescript
 * import utils from 'your-package';
 * const items = ['a', 'b', 'c', 'd'];
 * const moved = utils.array.arrayMove(items, 1, 1); // Move 'b' down
 * console.log(moved); // ['a', 'c', 'b', 'd']
 *
 * const movedUp = utils.array.arrayMove(items, 2, -1); // Move 'c' up
 * console.log(movedUp); // ['a', 'c', 'b', 'd']
 * ```
 * @group Array
 */
export const arrayMove = (array: any[], index: number, move: -1 | 1) => {
  const arrayCopy = JSON.parse(JSON.stringify(array))
  const newPosition = index + move

  if(newPosition > array.length || newPosition < 0) return array

  arrayCopy[newPosition] = arrayCopy[index]
  arrayCopy[index] = array[newPosition]

  return arrayCopy
}

/**
 * Retrieves a nested property value from an object using dot notation
 * @param data - The object to search in
 * @param key - The property path using dot notation (e.g., "user.profile.name")
 * @returns The value at the specified path, or null if not found
 * @example
 * ```typescript
 * import utils from 'your-package';
 * const user = {
 *   profile: {
 *     name: 'John',
 *     settings: {
 *       theme: 'dark'
 *     }
 *   }
 * };
 *
 * const name = utils.array.getKey(user, 'profile.name');
 * console.log(name); // 'John'
 *
 * const theme = utils.array.getKey(user, 'profile.settings.theme');
 * console.log(theme); // 'dark'
 *
 * const missing = utils.array.getKey(user, 'profile.age');
 * console.log(missing); // null
 * ```
 * @group Array
 */
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
