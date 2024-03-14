/**
 * @param {string} text
 * @param {Array<string>} queries
 * @return {string}
 */
export default function textSearch(text, queries) {
  if (text.trim() === '') {
    return text;
  }

  const boldChars = Array.from({ length: text.length }, () => 0);

  for (const query of queries) {
    if (query.trim() === '') continue;
    let i = 0;
    while (i < text.length) {
      const substr = text.slice(i, i + query.length).toLowerCase();
      if (substr === query.toLowerCase()) {
        boldChars.fill (1, i, i + query.length);
        i += query.length;
      } else {
        i++;
      }
    }
  }

  let highlightedStr = '';
  for (let i = 0; i <text.length; i++) {
    if (boldChars[i] && (i === 0 || !boldChars[i-1])) {
      highlightedStr += '<b>';
    }
    highlightedStr += text[i];
    if (boldChars[i] && (i === text.length - 1 || !boldChars[i + 1])) {
      highlightedStr += '</b>';
    }
  }

  return highlightedStr;
}