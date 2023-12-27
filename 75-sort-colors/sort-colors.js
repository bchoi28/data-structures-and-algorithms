/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let counts = Array.from({length: 3}, () => 0);

    for (let n of nums) {
        counts[n]++;
    };

    let i = 0;
    for (let n = 0; n < counts.length; n++) {
        for (let c = 0; c < counts[n]; c++) {
            nums[i] = n;
            i++
        }
    }

    return nums;
};