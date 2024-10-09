def majorityElemment(nums): 
    for num in nums: 
        if (nums.count(num) / len(nums)) >= 0.5:
            return num
    return None

print(majorityElemment([6,1,2]))