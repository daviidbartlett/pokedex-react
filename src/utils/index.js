export const capitaliseString = (string) => {
  if (typeof string !== "string") return "incorrect data type";
  return string[0].toUpperCase() + string.slice(1);
};
