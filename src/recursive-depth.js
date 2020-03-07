module.exports = class DepthCalculator {
    calculateDepth(arr) {
        let result = 0;
        for (let i = 0 ; i < arr.length ; i++){
            if (arr[i] instanceof Array)
                result = Math.max(this.calculateDepth(arr[i]), result);
        }
        return result+1;
    }
};