const String = {
  /**
   * The ucwords() method capitalizes the first letter of every word in a string.
   * @param {string} str
   * @returns {string}
   * @example
   * range("hello world") // output:"Hello World"
   */
  ucwords: (str) => {
    return str
      .split(" ")
      .map((word) => {
        return /^[A-Za-z]+$/.test(word) ? word[0].toUpperCase() + word.slice(1):word
      })
      .join(" ");
  },
};
