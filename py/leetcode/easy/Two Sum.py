"""
Function get an array of integer nums and an integer target, 
return indices of the two numbers such that they add up to target.
"""


# Brute Force
def twoSum(nums, target):
    for n, num in enumerate(nums):
        for i, inner in enumerate(nums):
            if num + inner == target and n != i:
                return [n, i]


# One-pass Hash Table
def twoSum(nums, target):
    hash = {}

    for i, num in enumerate(nums):
        n = target - num
        if n in hash:
            return [hash[n], i]
        else:
            hash[num] = i


print(twoSum([2, 7, 11, 15], 9) == [0, 1])
print(twoSum([3, 2, 4], 6) == [1, 2])
print(twoSum([3, 3], 6) == [0, 1])
