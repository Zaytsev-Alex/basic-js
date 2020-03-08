module.exports = function repeater(str, options) {
    let result = '';
    if (options.hasOwnProperty('separator') == false){
        options.separator = '+';
    }
    if (options.hasOwnProperty('additionSeparator') == false){
        options.additionSeparator = '|';
    }
    if (options.hasOwnProperty('repeatTimes') == false){
        options.repeatTimes = 0;
    }
    if (options.hasOwnProperty('additionRepeatTimes') == false){
        options.additionRepeatTimes = 0;
    }
    if (options.hasOwnProperty('addition') == false){
        options.addition = '';
    }
     if (options.repeatTimes == undefined){
         options.repeatTimes = 1;
     }
     if (options.additionRepeatTimes == undefined){
         options.additionRepeatTimes = 1;
     }
    for (let i = 0 ; i < options.repeatTimes ; i++){
        result += str;
        if (options.additionRepeatTimes >= 1){
            for (let k = 0 ; k < options.additionRepeatTimes ; k++){
                result += options.addition;
                if (k != options.additionRepeatTimes - 1)
                    result += options.additionSeparator;
            }
        }
        if (i != options.repeatTimes - 1){
            result += options.separator;
        }
    }
    return result;
};
// repeatTimes sets the number of repetitions of the str;
// separator is a string separating repetitions of the str;
// addition is an additional string that will be added to each repetition of the str;
// additionRepeatTimes sets the number of repetitions of the addition;
// additionSeparator is a string separating repetitions of the addition.