/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {

    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i]) && Math.abs(i - map.get(nums[i])) <= k) {
            return true
        } else {
            map.set(nums[i], i);
        }
    };
    return false;

    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] == nums[j] && Math.abs(i - j) <= k) {
                return true;
            }
        }
    };
    return false;
};