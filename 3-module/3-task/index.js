function camelize(str) {
  let strArr = str.split('-');
    let newStr = strArr[0];

    for (let i = 0; i < strArr.length; i++) {
        if (i > 0) {
            let strTemp = strArr[i];

            strArr[i] = strTemp[0].toUpperCase() + strTemp.slice(1);
            newStr += strArr[i];
        }
    }

    return newStr;
}
