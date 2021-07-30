# v1
class Solution(object):
    def containsDuplicate(self, nums):
        return len(nums) > len(set(nums))


# v2
class Solution(object):
    def containsDuplicate(self, nums):
        seen = set()

        for num in nums:
            if num in seen:
                return True
            seen.add(num)

        return False
