let dictionary = ['Airplane', 'airport', 'apple', 'ball'];

let input = 'aim';

/**
 *
 * @param input
 * @param dictionary
 * @returns {Array}
 */
function autoComplete(input, dictionary) {
  return filtering(input, dictionary).slice(0, 4);
}

/**
 *
 * @param input
 * @param dictionary
 * @returns {Array}
 */
function filtering(input, dictionary) {

  let result = dictionary.filter((item) => {
    return isConcurrency(input, item);
  });

  if (!result.length && input.length > 1) {
    result = filtering(input.slice(0, -1), dictionary);
  }

  return result;
}

/**
 *
 * @param input
 * @param value
 * @returns {boolean}
 */
function isConcurrency(input, value) {
  return conversion(value).search((conversion(input))) + 1 === 1;
}

/**
 *
 * @param value
 * @returns {string}
 */
function conversion(value) {
  return String(value).trim().replace(/[^a-zA-ZА-Яа-яЁё]/gi, '').toLowerCase();
}