// Levenshtein distance function

/**
 * Calculates the Levenshtein distance between two strings.
 * The Levenshtein distance is the minimum number of single-character edits (insertions, deletions, or substitutions) required to change one word into the other.
 *
 * @param {string} a - The first string.
 * @param {string} b - The second string.
 * @returns {number} The Levenshtein distance between the two strings.
 */
function levenshtein(a, b) {
  const matrix = [];

  // Initialize the first column of the matrix
  for (let i = 0; i <= b.length; i++) {
    matrix[i] = [i];
  }

  // Initialize the first row of the matrix
  for (let j = 0; j <= a.length; j++) {
    matrix[0][j] = j;
  }

  // Fill in the rest of the matrix
  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1, // substitution
          Math.min(
            matrix[i][j - 1] + 1, // insertion
            matrix[i - 1][j] + 1,
          ), // deletion
        );
      }
    }
  }

  // Return the Levenshtein distance
  return matrix[b.length][a.length];
}

// Function to check if names are very similar
/**
 * Checks if two names are similar based on a Levenshtein distance threshold.
 * The Levenshtein distance is the minimum number of single-character edits (insertions, deletions, or substitutions) required to change one word into the other.
 *
 * @param {string} name1 - The first name to compare.
 * @param {string} name2 - The second name to compare.
 * @param {number} [threshold=3] - The maximum allowed Levenshtein distance for the names to be considered similar. Default is 3.
 * @returns {boolean} True if the Levenshtein distance between the names is less than or equal to the threshold, false otherwise.
 * @example
 * // Example usage:
 * console.log(areNamesSimilar('John', 'Jon')); // Output: true
 * console.log(areNamesSimilar('John', 'Jane')); // Output: false
 */
export function areNamesSimilar(name1, name2, threshold = 3) {
  return levenshtein(name1, name2) <= threshold;
}
