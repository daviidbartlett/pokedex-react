export const capitaliseString = (string) => {
  console.log(typeof string);
  if (typeof string !== "string") return "incorrect data type";
  return string[0].toUpperCase() + string.slice(1);
};
