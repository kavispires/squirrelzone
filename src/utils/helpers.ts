import _ from 'lodash';

/**
 * Shuffle list copy
 * @param list
 * @returns
 */
export const shuffle = <T>(list: T[]): T[] => {
  const result = [...list];
  result.sort(() => Math.random() - 0.5);
  return result;
};

/**
 * Get random number
 * @param [min] inclusive
 * @param [max] inclusive
 * @returns a random number
 */
export const getRandomNumber = (min = 0, max = 100): number =>
  Math.floor(Math.random() * (max - min + 1) + min);

/**
 * Get random element/item from a list
 * @param list
 * @returns one random item
 */
export const getRandomItem = <T>(list: T[]): T => {
  return list[Math.floor(Math.random() * list.length)];
};

/**
 * Get random elements from a list
 * @param list
 * @param [quantity]
 * @returns random items
 */
export const getRandomItems = <T>(list: T[], quantity = 1): T[] => {
  const shuffledList = shuffle(list);
  if (quantity > shuffledList.length) return shuffledList;

  const res = new Array(quantity).fill(null);
  for (let i = 0; i < res.length; i++) {
    res[i] = shuffledList[i];
  }
  return res;
};

/**
 * Get random unique items from a list
 * @param list
 * @param used
 * @param [quantity]
 * @returns
 */
export const getRandomUniqueItems = <T>(list: T[], used: T[] = [], quantity = 1): T[] => {
  const availableList = list.filter((i) => !used.includes(i));
  return getRandomItems(availableList, quantity);
};

/**
 * Get a random item from list that is not
 * @param list
 * @param used
 * @returns
 */
export const getRandomUniqueItem = <T>(list: T[], used: T[]): T => {
  return getRandomUniqueItems(list, used, 1)[0];
};

/**
 * Humanizes a string
 * @param str
 * @returns
 */
export const humanize = (str: string): string => {
  return _.capitalize(_.trim(_.snakeCase(str).replace(/_id$/, '').replace(/_/g, ' ')));
};

/**
 * Gets the last item in a list
 * @param list
 * @returns
 */
export const getLastItem = <T>(list: T[]): T => {
  return list[list.length - 1];
};

/**
 * Get percentage of given value within given total
 * @param value
 * @param total
 * @returns
 */
export const getPercentage = (value: number, total: number): number => {
  return Math.round((100 * value) / total);
};

/**
 * Pauses during presentation
 * @param duration
 */
export const wait = async (duration = 1000) => {
  return await new Promise((resolve) => setTimeout(resolve, duration));
};
