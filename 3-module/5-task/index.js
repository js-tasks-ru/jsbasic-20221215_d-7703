function getMinMax(str) {
  let arrNum = [];
    let result = {
        min: 0,
        max: 0,
    }

    str.split(' ')
    .map( el => {
        if ( isFinite(+el) ) arrNum.push(+el)
    });
    

    result.min = Math.min(...arrNum);
    result.max = Math.max(...arrNum);

    return result;
}
