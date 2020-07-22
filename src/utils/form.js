export const encode = (data) => {
  const formData = new FormData();

  Object.keys(data).forEach((k) => {
    formData.append(k, data[k]);
  });

  return formData;
};
