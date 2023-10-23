/**
 * Форматирование окончаний в слове
 *
 * Пример: declOfNum(count, ['найдена', 'найдено', 'найдены'])
 *
 * @param number
 * @param titles
 * @returns {*}
 */
export const declOfNum = (number, titles) => {
  number = Math.abs(number)
  const cases = [2, 0, 1, 1, 1, 2]

  return titles[
    number % 100 > 4 && number % 100 < 20
      ? 2
      : cases[number % 10 < 5 ? number % 10 : 5]
  ]
}
