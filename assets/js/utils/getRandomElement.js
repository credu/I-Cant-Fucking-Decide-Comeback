/**
 * Get a random element of a array
 * @param {Object[]} array
 * @returns {Object} A array element
 */
export const getRandomElement = (array) => {
    const randomNumber = Math.floor(Math.random() * array.length);
    return array[randomNumber];
}
