module.exports = function transform(arr) {
    var result = [];
    //console.log(JSON.stringify(arr));
    if (arr.length === 0){
        return [];
    } else if (arr.length === 1 && arr[0] === '--discard-prev' || arr[0] === '--discard-next' || arr[0] === '--double-next' || arr[0] === '--discard-next'){
            return [];
        }
        else if (Array.isArray(arr)){
            for (let i = 0 ; i < arr.length ; i++){
                if (arr[i] == '--discard-next'){
                    if (i == arr.length - 1){
                            return result;
                    }
                    else {
                        i += 2;
                    }
                }
                else if (arr[i] == '--discard-prev'){
                    if (i == 0){
                        continue;
                    }
                    else{
                        result.pop();
                    }
                }
                else if (arr[i] == '--double-next'){
                    if (i == arr.length - 1){
                        continue;
                    }
                    else {
                        result.push(arr[i+1]);
                    }
                }
                else if (arr[i] == '--double-prev'){
                    if (i == 0){
                        continue;
                    }
                    else {
                        result.push(arr[i-1]);
                    }
                } else {
                    result.push(arr[i]);
                }
            }
            return arr;
        }
        else {
            throw Error;
        }
};