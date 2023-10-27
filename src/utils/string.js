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

/**
 * Конвертирует строку в camelCase
 *
 * Пример: total_price -> totalPrice
 *
 * @param obj
 * @returns {{}}
 */
export const convertKeysToCamelCase = obj => {
  const camelCaseObj = {}

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const camelCaseKey = key.replace(/_(\w)/g, (_, letter) =>
        letter.toUpperCase(),
      )

      camelCaseObj[camelCaseKey] = obj[key]
    }
  }

  return camelCaseObj
}
