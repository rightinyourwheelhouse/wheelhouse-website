export const encode = (data) => {
  const formData = new FormData();

  Object.keys(data).forEach((key) => formData.append(key, data[key]));

  return formData;
};
