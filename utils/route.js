export const getCategoryFromUrl = (url) => {
  const urlArray = url.split("/");
  return urlArray[urlArray.length - 1];
};
