const hasUniqueCharacters = (input) => {
  const uniqueChars = new Set(input);
  return uniqueChars.size >= 5;
};

module.exports = hasUniqueCharacters;

