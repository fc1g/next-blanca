export const getPrice = (monthIndex: number) => {
  const prices = [150, 150, 150, 150, 180, 220, 300, 300, 220, 150, 150, 150];
  return prices[monthIndex] || 0;
};
