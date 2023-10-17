/**
 * Esta función define el valor de la carta As (A)
 * @param {String} cardValue
 * @returns {Number}
 */
const defineAsValue = cardValue => {
  return cardValue === 'A' ? 11 : 10;
};

/**
 * Esta función devuelve un valor numérico dependiendo de la carta recibida
 * @param {String} carta
 * @returns {Number}
 */
export const valorCarta = carta => {
  const valor = carta.substring(0, carta.length - 1);
  return isNaN(valor) ? defineAsValue() : valor * 1;
};
