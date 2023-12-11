/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    const filteredArr = [];
    arr.forEach((ele, i) => {
        if (fn(ele, i)) {
            filteredArr.push(ele);
        }
    })
    return filteredArr;
};