module.exports = function getSeason(date) {
  if (date instanceof Date /*&& typeof date == "object" && Number.isInteger(date.getMonth())*/) {
    let month = date.getMonth() + 1;
    let result;
    if (month >= 3 && month <= 5)
      result = 'spring';
    else
    if (month >= 6 && month <= 8)
      result = 'summer';
    else
    if (month >= 9 && month <= 11)
      result = 'autumn';
    else
    if (month == 12 || month == 1 || month == 2)
      result = 'winter';
    return result;
  } else if (date == undefined) {
      return 'Unable to determine the time of year!';
  } else throw Error;
};

//typeof date.getMonth === 'function'