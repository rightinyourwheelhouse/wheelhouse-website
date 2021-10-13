export const orientationName = aspectRatio => {
  if (aspectRatio > 1) {
    return 'landscape';
  }
  if (aspectRatio < 1) {
    return 'portrait';
  }

  return 'square';
};
