export function getRandomColor() {
  const getNumHEX = () => (Math.random() * 255).toFixed();
  return `rgb(${getNumHEX()}, ${getNumHEX()}, ${getNumHEX()})`;
}
