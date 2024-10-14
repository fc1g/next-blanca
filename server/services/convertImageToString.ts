export const convertImage = (image: Buffer) => {
  return `data:image/webp;base64,${Buffer.from(image).toString('base64')}`;
};
