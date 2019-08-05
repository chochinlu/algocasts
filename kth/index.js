/**
 * @param {number} k
 * @param {number[]} nums
 */
const KthLargest = function(k, nums) {
  this.k = k;
  this.kthArr = nums ? nums.sort((a, b) => b - a).slice(0, k) : nums;
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
  if (this.kthArr.length < this.k) {
    this.kthArr.push(val);
    this.kthArr = this.kthArr.sort((a, b) => b - a);
  } else if (val > this.kthArr[this.kthArr.length - 1]) {
    this.kthArr.pop();
    this.kthArr.push(val);
    this.kthArr = this.kthArr.sort((a, b) => b - a);
  }

  return this.kthArr[this.kthArr.length - 1];
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
// const k = 3;
// const arr = [];
// const kthLargest = new KthLargest(3, arr);
// kthLargest.add(3);
// const result = kthLargest.add(5);
// console.log(result); //  5
