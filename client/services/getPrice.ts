export const getPrice = (monthIndex: number) => {
  const prices = [150, 150, 150, 170, 180, 200, 300, 300, 200, 150, 150, 150];
  return prices[monthIndex] || 0;
};
