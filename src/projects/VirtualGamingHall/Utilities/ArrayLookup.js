export const lookupGame = (lib, key, searchStr) => {
  return lib.filter(item => item[`${key}`] === searchStr);
}
