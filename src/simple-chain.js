const chainMaker = {
  result: [],
  k: 0,
  getLength() {
    return this.result.length;
  },
  addLink(value) {
    this.result[this.k] = '( ';
    this.result[this.k] += value;
    this.result[this.k] += ' )';
    this.k++;
    return this;
  },
  removeLink(position) {
    if (
      this.result[position - 1] === undefined ||
      position >= this.result.length ||
      position % 1 != 0
    ) {
      this.result = [];
      this.k = 0;
      throw new Error();
    }
    this.result.splice(position - 1, 1);
    this.k--;
    return this;
  },
  reverseChain() {
    this.result.reverse();
    return this;
  },
  finishChain() {
    let res = this.result.join("~~");
    this.result = [];
    this.k = 0;
    return res;
  }
};

module.exports = chainMaker;
