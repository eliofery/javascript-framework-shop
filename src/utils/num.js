/**
 * Форматирование числа в валютный вид
 *
 * Пример: 1000000 -> 1 000 000
 *
 * @param number
 * @returns {string}
 */
export const priceFormat = number => {
  number = String(number)

  if (number.length < 4) {
    return number
  }

  return Number(number).toLocaleString('ru-RU')
}
