module.exports = function toReadable (number) {
  const str = String(number);
  const arr1 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const arr2 = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const arr3 = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety', ' hundred'];
  const dec = arr3[str[0]-2];
  const hundred = arr1[str[0]] + arr3[8];
  if (str.length === 1) {
    return arr1[number];
  } else if (str.length === 2 && str[0] === '1') {
    return arr2[str[1]];
  } else if (str.length === 2 && str[1] === '0') {
    return dec;
  } else if (str.length === 2) {
    return dec + ' ' + arr1[str[1]];
  } else if (str.length === 3 && str[1] === '0' && str[2] === '0') {
    return hundred;
  } else if (str.length === 3 && str[1] === '0') {
    return hundred + ' ' + arr1[str[2]];
  } else if (str.length === 3 && str[1] === '1') {
    return hundred + ' ' + arr2[str[2]];
  } else if (str.length === 3 && str[2] === '0') {
    return hundred + ' ' + arr3[str[1]-2];
  } else {
    return hundred + ' ' + arr3[str[1]-2] + ' ' + arr1[str[2]];
  }
}