/**
 * Describes the structure for a Google Font family object.
 */
interface FontFamily {
  /** The name of the font family (e.g., "IBM Plex Sans"). */
  name: string;
  /** An array of normal font weights (e.g., [400, 600]). */
  weights?: (number | string)[];
  /** An array of italic font weights (e.g., [400, 600]). */
  italics?: (number | string)[];
}

/**
 * Converts a list of Google Font objects into a Google Fonts API v2 URL.
 * 
 * @param fontFamilies - An array of font family objects to include in the URL.
 * @returns The generated Google Fonts API URL, or an empty string if no valid fonts are provided.
 */
export function generateGoogleFontsUrl(fontFamilies: FontFamily[]): string {
  // Validate input, return an empty string if invalid.
  if (!Array.isArray(fontFamilies) || fontFamilies.length === 0) {
    return '';
  }

  const baseUrl = 'https://fonts.googleapis.com/css2';
  const familyParams = [];

  for (const font of fontFamilies) {
    // Skip if the font object or its name is invalid.
    if (!font || typeof font.name !== 'string' || font.name.trim() === '') {
      continue;
    }

    const fontName = font.name.replace(/ /g, '+');
    const stylePairs: string[] = [];

    // Process normal weights if they exist.
    if (font.weights && font.weights.length > 0) {
      // Sort weights numerically to create a clean URL.
      const sortedNormalWeights = [...font.weights].sort((a, b) => Number(a) - Number(b));
      sortedNormalWeights.forEach(weight => {
        stylePairs.push(`0,${weight}`);
      });
    }

    // Process italic weights if they exist.
    if (font.italics && font.italics.length > 0) {
      // Sort weights numerically to create a clean URL.
      const sortedItaliclWeights = [...font.italics].sort((a, b) => Number(a) - Number(b));
      sortedItaliclWeights.forEach(weight => {
        stylePairs.push(`1,${weight}`);
      });
    }

    // Add the font to the list of parameters if any weights were specified.
    if (stylePairs.length > 0) {
      familyParams.push(`family=${fontName}:ital,wght@${stylePairs.join(';')}`);
    }
  }

  // If no valid font families were processed, return an empty string.
  if (familyParams.length === 0) {
    return '';
  }

  return `${baseUrl}?${familyParams.join('&')}&display=swap`;
}