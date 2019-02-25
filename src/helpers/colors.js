export const getColors = () => JSON.parse(localStorage.getItem('favColors'));

export const setColors = (favColors) => localStorage.setItem('favColors', JSON.stringify(favColors));

export const updateColor = (color) => {
  const favColors = getColors();
  favColors[color]++;
  setColors(favColors);
}
