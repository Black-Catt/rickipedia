export const changeFirstLetter = (
  word: string,
  upper: boolean = false
): string => {
  const filteredWord = word.replace(/[_]/gi, '');
  return upper
    ? filteredWord.charAt(0).toUpperCase() + filteredWord.slice(1)
    : filteredWord.charAt(0).toLowerCase() + filteredWord.slice(1);
};
