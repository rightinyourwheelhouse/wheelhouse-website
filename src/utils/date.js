export const toShortDate = (date) => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const currentDateTime = new Date(date);
  return `${currentDateTime.getDate()} ${months[currentDateTime.getMonth()]} ${currentDateTime.getFullYear()}`;
};
