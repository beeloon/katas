# Brute Force
class Solution(object):
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        for n, num in enumerate(nums):
            for i, inner in enumerate(nums):
                if num + inner == target and n != i:
                    return [n, i]


# One-pass Hash Table
class Solution(object):
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        hash = {}

        for i, num in enumerate(nums):
            n = target - num
            if n in hash:
                return [hash[n], i]
            else:
                hash[num] = i


s = Solution()
print(s.twoSum([2, 7, 11, 15], 9) == [0, 1])
print(s.twoSum([3, 2, 4], 6) == [1, 2])
print(s.twoSum([3, 3], 6) == [0, 1])
