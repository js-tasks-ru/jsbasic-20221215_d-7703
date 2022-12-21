function ucFirst(str) {
  if (str.length === 1) return str.toUpperCase();
  if (str === "") return str;

  let strStart = str[0].toUpperCase();
  let strEnd = str.slice(1);
  return strStart + strEnd;
}
