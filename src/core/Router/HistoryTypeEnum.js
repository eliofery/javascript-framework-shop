/**
 * Режимы истории
 *
 * @type {Readonly<{STATE: string, HASH: string}>}
 */
const HISTORY_TYPE_ENUM = Object.freeze({
  HASH: 'hashchange',
  STATE: 'popstate',
})

export default HISTORY_TYPE_ENUM
