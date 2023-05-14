const String = {
  /**
   * The capitalize() method capitalizes the first letter of every word in a string.
   * @param {string} str
   * @returns {string}
   * @example
   * capitalize("hello world") // output:"Hello World"
   */
  capitalize: (str) => {
    return str
      .split(" ")
      .map((word) => {
        return /^[A-Za-z]+$/.test(word)
          ? word[0].toUpperCase() + word.slice(1)
          : word;
      })
      .join(" ");
  },
};
export default String;
