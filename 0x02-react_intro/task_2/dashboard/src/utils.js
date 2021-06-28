export const getFullYear = () => {
  return 2021;
}

export const getFooterCopy = isIndex => {
  if (isIndex) return 'Holberton School';
  else return 'Holberton School main dashboard'
}