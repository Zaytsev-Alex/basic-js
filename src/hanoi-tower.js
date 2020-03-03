module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    let result = {};
    let seconds = turnsSpeed / 3600;
    let turns = Math.pow(2, disksNumber) - 1;
    result.turns = turns;
    result.seconds = turns / seconds;
    return result;
}