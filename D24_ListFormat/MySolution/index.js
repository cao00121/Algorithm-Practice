const DEFAULT_SEPARATOR = ', ';
const DEFAULT_OTHERS_SEPARATOR = ' and ';
const DEFAULT_OTHERS_LABEL = 'other';

/**
 * @param {Array<string>} items
 * @param {{sorted?: boolean, length?: number, unique?: boolean}} [options]
 * @return {string}
 */
export default function listFormat(items, options = {}) {
  const {
    sorted,
    length,
    unique,
    separator = DEFAULT_SEPARATOR,
    othersSeparator = DEFAULT_OTHERS_SEPARATOR,
    othersLabel = DEFAULT_OTHERS_LABEL,
  } = options;

  // Filter falsy values.
  let formattedItems = items.filter((item) => !!item);

  // Return empty string if there is no items.
  if (formattedItems.length === 0) {
    return '';
  }
  
  // No processing is needed if there's only one item.
  if (formattedItems.length === 1) {
    return formattedItems[0];
  }

  // Remove duplicate values.
  if (unique) {
    formattedItems = Array.from(new Set(formattedItems));
  }

  // Sort values.
  if (sorted) {
    formattedItems.sort();
  }

  // Length is specified and valid.
  if (length && length > 0 && length < formattedItems.length) {
    const firstSection = formattedItems.slice(0, length).join(separator);
    const count = formattedItems.length - length;
    const secondSection = `${count} ${othersLabel + (count > 1 ? 's' : '')}`;
    return [firstSection, secondSection].join(othersSeparator);
  }

  // Case where length is not defined.
  const firstSection = formattedItems.slice(0, formattedItems.length - 1).join(separator);
  const secondSection = formattedItems[formattedItems.length - 1];
  return [firstSection, secondSection].join(othersSeparator);
}