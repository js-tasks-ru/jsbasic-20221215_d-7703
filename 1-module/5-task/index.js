function truncate(str, maxlength) {
  let strLen = str.length;
  let strSymbol = '…';
  let strCut = str.slice(0, maxlength - 1);


  if (strLen > maxlength) return strCut + strSymbol;

  return str;
}
