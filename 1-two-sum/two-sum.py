class Solution(object):
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """

        map = {}
        for i, num in enumerate(nums):
            diff = target - num
            if diff in map:
                return [map[diff], i]
            else:
                map[num] = i
        