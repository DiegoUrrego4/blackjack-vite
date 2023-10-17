/**
 * Esta función me permite tomar una carta
 * @param {Array<String>} deck - Ejemplo: ['5S', '8S', 'AD', ... ,'5H']
 * @returns {String}
 */
export const pedirCarta = deck => {
  if (deck.length === 0) {
    throw new Error('No hay cartas en el deck');
  }
  const carta = deck.pop();
  return carta;
};
