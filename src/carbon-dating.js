const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity = NaN) {
  if (typeof(sampleActivity) != 'string')
    return false;
  let k = 0.693 / HALF_LIFE_PERIOD;
  var data = sampleActivity;
  if (sampleActivity.indexOf('.') != sampleActivity.lastIndexOf('.'))
  data = sampleActivity.slice(0, sampleActivity.lastIndexOf('.'));
  let result = Math.log(MODERN_ACTIVITY/Number(data))/k;
  if (result < 0 || result == Infinity || isNaN(result))
    return false;
  return Math.ceil(result);
};
