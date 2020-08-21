import emojiList from "../emojiList";

/**
 * Returns emojis where title or keyword matches searchText and limit results to maxResults
 * @param {string} searchText
 * @param {number} maxResults
 * @returns {Array} emojis matching
 */
export default function filterEmojis(searchText, maxResults) {
  return (
    emojiList
      .filter((emoji) => {
        // Title includes search string
        if (emoji.title.toLowerCase().includes(searchText.toLowerCase())) {
          return true;
        }
        // Keyworks includes search string
        if (emoji.keywords.includes(searchText)) {
          return true;
        }
        // No match
        return false;
      })
      // Limit results
      .slice(0, maxResults)
  );
}
