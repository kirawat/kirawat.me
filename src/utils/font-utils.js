/**
 * Converts a list of Google Font objects into a Google Fonts API v2 URL.
 * 
 * @param {Array<Object>} fontFamilies - An arrau of font family objects.
 * Each object should have:
 * - name: {string} The name of the font family (e.g., "IBM Plex Sans").
 * - weights: {Array<number|string>} Optional. An array of normal font weights (e.g., [400, 600]).
 * - italics: {Array<number|string>} Optional. An array of italic font weights (e.g., [400, 600]).
 * 
 * @returns {string} The Google Fonts API URL. Returns an empty string if no valid font families are provided.
 */
export function generateGoogleFontsUrl(fontFamilies) {
  // Validate input.
  if (!Array.isArray(fontFamilies) || fontFamilies.length === 0) {
    return;
  }

  const baseUrl = 'https://fonts.googleapis.com/css2';
  const familyParams = [];

  for (const font of fontFamilies) {
    if (!font || typeof font.name !== 'string' || font.name.trim() === '') {
      continue;
    }

    const fontName = font.name.replace(/ /g, '+');
    const stylePairs = [];

    // Process normal weights.
    if (Array.isArray(font.weights) && font.weights.length > 0) {
      const sortedNormalWeights = [...font.weights].sort((a, b) => Number(a) - Number(b));
      sortedNormalWeights.forEach(weight => {
        stylePairs.push(`0,${weight}`);
      });
    }

    // Process italic weights.
    if (Array.isArray(font.italics) && font.italics.length > 0) {
      const sortedItalicWeights = [...font.italics].sort((a, b) => Number(a) - Number(b));
      sortedItalicWeights.forEach(weight => {
        stylePairs.push(`1,${weight}`);
      });
    }

    if (stylePairs.length > 0) {
      familyParams.push(`family=${fontName}:ital,wght@${stylePairs.join(';')}`);
    }
  }

  if (familyParams.length === 0) {
    // No valid font families to request.
    return '';
  }

  return `${baseUrl}?${familyParams.join('&')}&display=swap`;
}