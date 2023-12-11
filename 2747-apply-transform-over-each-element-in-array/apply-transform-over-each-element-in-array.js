/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    const newArr = [];
    arr.forEach((ele, i) => {
        newArr.push(fn(ele, i));
    })
    return newArr;
};