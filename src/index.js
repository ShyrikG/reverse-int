module.exports = function reverse (n) {
    let str = '';
    for (let i of (Math.abs(n).toString(10))){
    str = i + str;
    }
  return +str;
}
